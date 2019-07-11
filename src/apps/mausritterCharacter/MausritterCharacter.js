import React, { useState } from 'react';
import { sum, times, drop, max, compact } from 'lodash/fp';

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
} from '../glaiveCharacter/components';

import {
    BACKGROUNDS,
    FIRST_NAMES,
    LAST_NAMES,
    COAT_COLORS,
    COAT_PATTERNS,
    PHYSICAL_DETAIL,
    BIRTH_SIGNS,
} from './mouseritterConstants';

const pick = (array) => (
    array[Math.floor(Math.random() * array.length)]
);

const roll = (size) => Math.floor(Math.random() * size) + 1;
const rollDice = (numberOfDice) => (sides) => sum(times(() => roll(sides), numberOfDice))

const rollStat = () => sum(drop(1)(times(() => roll(6), 3).sort()));
const rollHp = () => rollDice(1)(6);
const rollPips = () => rollDice(1)(6);

const getBackground = (hp, pips) => BACKGROUNDS[(hp - 1) * 6 + (pips - 1)];

const rollCharacter = () => {
    const str = rollStat();
    const dex = rollStat();
    const wil = rollStat();

    const hp = rollHp();
    const pips = rollPips();

    const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;
    const coat = `${pick(COAT_COLORS)}, ${pick(COAT_PATTERNS)}`;
    const physicalDetail = pick(PHYSICAL_DETAIL);
    const [birthsign, disposition] = pick(BIRTH_SIGNS);

    const [background, backgroundItemA, backgroundItemB] = getBackground(hp, pips);
    const [_, consolationItemA, consolationItemB] = getBackground(rollHp(), rollPips());

    const statMax = max([str, dex, wil]);

    return {
        name,
        coat,
        physicalDetail,
        birthsign,
        disposition,
        stats: {
            str,
            dex,
            wil,
        },
        hp,
        pips,
        background,
        items: compact([
            backgroundItemA,
            backgroundItemB,
            statMax <= 9 ? consolationItemA : null,
            statMax <= 7 ? consolationItemB : null,
            'Weapon of your choice'
        ]),
    }
}

const MausritterCharacter = () => {
    const [{
        name,
        coat,
        physicalDetail,
        birthsign,
        disposition,
        stats,
        hp,
        pips,
        background,
        items,
    }, setCharacter] = useState(rollCharacter());

    return (
        <CharacterAppWrapper>

            <CharacterDetails>
                <Header>
                    <Name>{name}</Name>

                    <Controls>
                        <RerollButton onClick={() => {
                            const char = rollCharacter();
                            console.log(char, setCharacter);
                            setCharacter(char);
                        }}>Roll again</RerollButton>
                    </Controls>
                </Header>

                <p>Background: <strong>{background}</strong></p>
                <p>
                    Bithsign: <strong>{birthsign}</strong>
                    <br/>
                    Disposition: <strong>{disposition}</strong>
                </p>
                <p>
                    Coat: <strong>{coat}</strong>
                    <br/>
                    Physical detail: <strong>{physicalDetail}</strong>
                </p>
            </CharacterDetails>

            <ColumnContainer>
                <Column>
                    <ColumnTitle>Attributes</ColumnTitle>

                    <ul>
                        <li>STR: {stats.str}</li>
                        <li>DEX: {stats.dex}</li>
                        <li>WIL: {stats.wil}</li>
                    </ul>

                    <ul>
                        <li>HP: {hp}</li>
                    </ul>
                </Column>
                <Column>
                    <ColumnTitle>Gear</ColumnTitle>
                    <ul>
                        <li>Pips: {pips}</li>
                        {items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </Column>
            </ColumnContainer>
        </CharacterAppWrapper>
    );
};

export default MausritterCharacter;
