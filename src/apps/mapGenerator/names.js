import { selectRand } from './util';

import adjectives from './words/adjectives';
import monsters from './words/monsters';
import people from './words/people';

const OPTIONS = {
    person: people,
    title: [ 'God', 'King', 'Queen', 'Prince', 'Princess', 'Duke', 'Baron', 'Duchess', 'Knight',
            'Priest', 'Priestess', 'Widow', 'Hunter', 'Mage', 'Bard', 'Wizard', 'Warlock', 'Paladin'],
    monster: monsters,
    place: ['Hollow', 'Crossing', 'Valley', 'Road', 'Ford', 'Gallows', 'Post', 'River', 'Bridge', 'Hill', 'Port', 'Market', 'Mill', 'Mines', 'Place'],
    castle: ['Castle', 'Keep', 'Fort', 'Mot', 'Fortress', 'Citadel', 'Palace', 'Hold', 'Shield', 'Helm', 'Barracks', 'Armoury', 'Spire', 'Gatehouse', 'Mansion', 'Moathouse'],
    start: ['Ax', 'Ad', 'Atter', 'Ada', 'Helm', 'Heigh', 'Fal', 'Mann', 'Natter', 'Dagger', 'Dins', 'Sword', 'Bow', 'Bright', 'Ur', 'Dan', 'Summer', 'Winder', 'White', 'Black', 'High', 'Low', 'Dins', 'Latt', 'Dren', 'Helf', 'Tide'],
    end: ['field', 'dram', 'ton', 'vale', 'fall', 'bow', 'art', 'dark', 'dale', 'mark', 'mott', 'ing', 'shill', 'sall', 'ole', 'low', 'bark', 'at', 'ed', 'ette', 'ilow', 'frond', 'luss', 'und', 'em'],
    endCastle: ['mott', 'dram', 'vale', 'fall', 'fell', 'bow', 'art', 'dark', 'hold', 'keep', 'helm', 'ole', 'set', 'mark', 'end', 'bark', 'att', 'rund'],
    ruin: ['Cave', 'Rock', 'Ruin', 'Mot', 'Swamp', 'End', 'Woods', 'Temple', 'Crypt', 'Grave', 'Mound',
           'Mine', 'Mount', 'Lode', 'Hollow', 'Grotto', 'Tunnel', 'Pit', 'Chamber', 'Hovel', 'Chapel', 'Tomb',
            'Bonefield', 'Mausoleum', 'Vault', 'Sepulchre', 'Catacombs', 'Charnel House'],
    adjective: adjectives,
    region: ['Reach', 'Field', 'Hill', 'Wood', 'Swamp', 'Mountain', 'River'],
    land: ['Land', 'Region', 'District', 'Zone', 'Barony', 'Dutchy', 'Shire', 'Territory',
            'Province', 'Canton', 'County', 'Parish', 'Prefecture', 'Principality', 'Country', 'Kingdom'],
}

const VILLAGE_FORMATS = [
    '{person}\'s {place}',
    '{title}\'s {place}',
    '{monster}\'s {place}',
    '{start}{end}',
    '{start}{end}',
    '{start}{end}{endCastle}',
    '{start}{end} {place}',
    '{monster}{end}',
    '{monster}s{end}',
];

const CASTLE_FORMATS = [
    '{person}\'s {place}',
    '{monster}\'s {place}',
    '{person}\'s {castle}',
    '{title} {person}\'s {castle}',
    '{monster}\'s {castle}',
    '{start}{endCastle}',
    '{start}{endCastle}{end}',
    '{monster}{endCastle}',
    '{castle} {start}{endCastle}',
    '{castle} {person}',
];

const RUIN_FORMATS = [
    '',
    '',
    'The {adjective} {ruin}',
    '{adjective} {ruin}',
    '{monster}\'s {adjective} {ruin}',
    '{monster} {ruin}',
    '{start}{endCastle} {ruin}',
    '{monster}{endCastle} {ruin}',
    '{start}{end} {ruin}',
    '{title}\'s {adjective} {place}',
    '{title}\'s {ruin}',
    '{person}\'s {ruin}',
    '{ruin} of {monster}s',
    '{ruin} of the {adjective} {monster}',
    '{ruin} of the {adjective} {monster}s',
];

const REGION_FORMATS = [
    '{adjective} {region} {land}',
    '{start}{endCastle} {land}',
    '{start}{end} {land}',
    '{start}{end} {castle} {place}',
    '{start}{end} {ruin} {land}',
    '{adjective} {monster} {land}',
    '{adjective} {castle} {region}',
    '{adjective} {place} {region}',
    '{monster}{endCastle} {ruin} {land}',
    '{land} of {title} {person}',
    '{land} of the {adjective} {monster}',
    '{land} of the {adjective} {region}s',
];

const parseFormat = (format, options) => {
    let name = format;

	while ( name.indexOf('{') !== -1 ) {
		const startIndex = name.indexOf('{');
		const endIndex = name.indexOf('}');
		const key = name.substr(startIndex+1, endIndex - startIndex - 1);

        if (!options[key]) {
            console.log('ERROR FINDING KEY', key);
        }

        const selectedValue = selectRand(options[key]);

		name = name.substr(0, startIndex) + selectedValue + name.substr(endIndex+1);
	}

	return name;
}

const makeVillageName = () => parseFormat(selectRand(VILLAGE_FORMATS), OPTIONS);
const makeCastleName = () => parseFormat(selectRand(CASTLE_FORMATS), OPTIONS);
const makeRuinName = () => parseFormat(selectRand(RUIN_FORMATS), OPTIONS);
const makeRegionName = () => parseFormat(selectRand(REGION_FORMATS), OPTIONS);

export const makeName = (type) => {
    if (type === 'castle') return makeCastleName();
    if (type === 'ruin') return makeRuinName();
    if (type === 'region') return makeRegionName();
    return makeVillageName();
}
