import React, { Component } from 'react';
import parse from 'csv-parse';
import { sum, times, startsWith, negate, min } from 'lodash/fp';

import {
    CharacterAppWrapper,
    CharacterDetails,
    Header,
    Name,
    Controls,
    RerollButton,
    SwitchStatsButton,
    ColumnContainer,
    Column,
    ColumnTitle
} from './components';

import Button from '../../components/shared/Button';

const BACKGROUNDS = 'https://docs.google.com/spreadsheets/d/e' +
    '/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=153117320&single=true&output=csv';
const STARTING_GEAR = 'https://docs.google.com/spreadsheets/d/e' +
    '/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=1613277797&single=true&output=csv';
const DEBTHOLDERS = 'https://docs.google.com/spreadsheets/d/e' +
    '/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=828688644&single=true&output=csv';
const NAMES = 'https://docs.google.com/spreadsheets/d/e' +
    '/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=674498928&single=true&output=csv';

const roll = (size) => Math.floor(Math.random() * size) + 1;
const rollDice = (numberOfDice) => (sides) => sum(times(() => roll(sides), numberOfDice))

const rollStat = () => rollDice(2)(6) + 3;
const rollKnaveStat = () => min(times(() => roll(3), 3));


const bonus = (stat) => Math.floor(stat / 3) - 3;

const formatBonus = (bonus) => {
    if (bonus >= 0) return `+${bonus}`;
    return `${bonus}`;
}

const formatStatBonus = (stat) => formatBonus(bonus(stat));

const pick = (array) => (
    array[Math.floor(Math.random() * array.length)]
);

const csvParser = (options = { columns: true, cast: true }) => (input) => new Promise((resolve, reject) => {
    parse(input, options, (err, output) => {
        if (err) return reject(err);
        resolve(output);
    });
});

const fetchCsvData = async (url) => {
    const data = await fetch(url);
    const text = await data.text();
    const parsedData = await csvParser()(text);

    return parsedData
}

const fetchData = async () => {
    const [backgrounds, startingGear, debtholders, names] = await Promise.all([
        fetchCsvData(BACKGROUNDS),
        fetchCsvData(STARTING_GEAR),
        fetchCsvData(DEBTHOLDERS),
        fetchCsvData(NAMES)
    ]);

    return {
        backgrounds,
        startingGear,
        debtholders,
        names,
    }
}

const splitRegExp = /(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/;

const selectEquipment = (startingGear) => (r1, r2, r3, r4) => ([
    ...startingGear[r1 - 1]['Weapon'].split(splitRegExp),
    ...startingGear[r2 - 1]['Armour'].split(splitRegExp),
    ...startingGear[r3 - 1]['Item'].split(splitRegExp),
    `${r4} pennies`,
]);

const selectName = (names) => {
    let givenName = pick(names)['Given name'];
    if (givenName === '[Roll on surnames]') {
        givenName = pick(names)['Surname']
        console.log('picked from surname', givenName);
    }

    let familyName = pick(names)['Surname'];
    if (familyName === '[Roll on given names]') {
        familyName = pick(names)['Given name']
        console.log('picked from given', familyName);
    }

    return `${givenName} ${familyName}`;
};

const rollStats = () => {
    const stats = {
        str: rollStat(),
        dex: rollStat(),
        con: rollStat(),
        int: rollStat(),
        wis: rollStat(),
        cha: rollStat(),
    };

    const [lowestStatKey, lowestStatValue] = Object.entries(stats).reduce(([accKey, accValue], [key, value]) => {
        if (value < accValue) {
            return [key, value];
        }

        return [accKey, accValue];
    }, ['', Infinity]);


    stats[lowestStatKey] = Math.max(lowestStatValue, rollStat());

    return stats;
};

const rollKnaveStats = () => ({
    str: rollKnaveStat(),
    dex: rollKnaveStat(),
    con: rollKnaveStat(),
    int: rollKnaveStat(),
    wis: rollKnaveStat(),
    cha: rollKnaveStat(),
})

class App extends Component {
    state = {
        loaded: false,
        statType: 'glog',
    }

    componentDidMount() {
        this.setState({ showKnaveStats: window.location.hash.indexOf('knave') > 0 })

        fetchData().then(({ backgrounds, startingGear, names, debtholders }) => {
            this.setState({ loaded: true, backgrounds, startingGear, names, debtholders });
            this.rollCharacter(this.state.statType);
        });
    }

    rollCharacter(statType) {
        const { backgrounds, startingGear, names, debtholders } = this.state;

        const equipRoll1 = roll(10);
        const equipRoll2 = roll(10);
        const equipRoll3 = roll(10);
        const equipRoll4 = roll(10);

        const career = pick(backgrounds);

        const stats = statType === 'knave' ? rollKnaveStats() : rollStats();

        const character = {
            statType,
            stats: stats,
            knaveHp: roll(8),
            name: selectName(names),
            failedCareer: career['Failed career'],
            items: [
                career['Item 1'],
                career['Item 2'],
                '------',
                'Torches',
                'Box of matches',
                'Rations',
                '------',
                `Equipment rolls: ${equipRoll1}, ${equipRoll2}, ${equipRoll3}, ${equipRoll4}`,
                '------',
                ...selectEquipment(startingGear)(equipRoll1, equipRoll2, equipRoll3, equipRoll4),
            ],
            debt: {
                holder: pick(debtholders),
                owed: (rollDice(2)(6) + 3) * 10,
            }
        }

        this.setState({ character });
    }

    switchStatType(toStatType) {
        this.setState({ statType: toStatType });
        this.rollCharacter(toStatType);
    }

    render() {
        const { loaded, character } = this.state;

        if (!loaded || !character) {
            return (
                <div className="App">
                    <h1>Loading...</h1>
                </div>
            )
        }

        const { items, failedCareer, name, stats, statType, debt } = character;

        const isSpecialAbility = startsWith('Special:');

        const specialAbility = items
            .filter(isSpecialAbility)
            .map((item) => item.replace('Special:', ''))[0];

        const inventoryItems = items.filter(negate(isSpecialAbility));

        return (
            <CharacterAppWrapper>
                <CharacterDetails>
                    <Header>
                        <Name>{name}</Name>

                        <Controls>
                            <RerollButton onClick={() => this.rollCharacter(statType)}>Roll again</RerollButton>
                            {' '}
                            {statType === 'knave' ?
                                <SwitchStatsButton onClick={() => this.switchStatType('glog')}>Switch to GLOG stats</SwitchStatsButton> :
                                <SwitchStatsButton onClick={() => this.switchStatType('knave')}>Switch to Knave stats</SwitchStatsButton>}
                        </Controls>
                    </Header>

                    <p>Failed career: <strong>{failedCareer}</strong></p>

                    {specialAbility && (
                        <p>Special: <strong>{specialAbility}</strong></p>
                    )}

                    <p>
                        Debt: owes <strong>£{debt.owed}</strong> to a <strong>{debt.holder['Debt-holder']}</strong>
                        <span className="detail"> - {debt.holder['Debt-holder detail']}</span>
                    </p>
                </CharacterDetails>

                <ColumnContainer>
                    {statType === 'knave' ? (
                        <Column>
                            <ColumnTitle>Stats</ColumnTitle>

                            <ul>
                                <li>Str: {stats.str} | {stats.str + 10}</li>
                                <li>Dex: {stats.dex} | {stats.dex + 10}</li>
                                <li>Con: {stats.con} | {stats.con + 10}</li>
                                <li>Int: {stats.int} | {stats.int + 10}</li>
                                <li>Wis: {stats.wis} | {stats.wis + 10}</li>
                                <li>Cha: {stats.cha} | {stats.cha + 10}</li>
                            </ul>

                            <ul>
                                <li>HP: {character.knaveHp}</li>
                            </ul>
                        </Column>
                    ) : (
                        <Column>
                            <ColumnTitle>Stats</ColumnTitle>

                            <ul>
                                <li>Str: {stats.str} ({formatStatBonus(stats.str)})</li>
                                <li>Dex: {stats.dex} ({formatStatBonus(stats.dex)})</li>
                                <li>Con: {stats.con} ({formatStatBonus(stats.con)})</li>
                                <li>Int: {stats.int} ({formatStatBonus(stats.int)})</li>
                                <li>Wis: {stats.wis} ({formatStatBonus(stats.wis)})</li>
                                <li>Cha: {stats.cha} ({formatStatBonus(stats.cha)})</li>
                            </ul>

                            <ul>
                                <li>Attack: 11</li>
                                <li>HP: {stats.con - 4}</li>
                                <li>Move: {12 + bonus(stats.dex)}</li>
                                <li>Stealth: {5 + bonus(stats.dex)}</li>
                                <li>Initiative: {stats.wis}</li>
                                <li>Save: {6 + bonus(stats.dex)}</li>
                            </ul>
                        </Column>
                    )}


                    <Column>
                        <ColumnTitle>Gear</ColumnTitle>
                        <p>Inventory slots: {statType === 'knave' ? stats.str + 10 : stats.str}</p>

                        <ul>
                            {inventoryItems.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </Column>
                </ColumnContainer>
            </CharacterAppWrapper>
        );
    }
}

export default App;
