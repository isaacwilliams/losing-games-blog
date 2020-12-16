import { useState, useEffect, useCallback } from 'react';
import seedRandom from 'seed-random';
import { drop, uniq } from 'lodash/fp';

import { colors } from '../portraitGenerator/portraitConstants';

export const SHUFFLE_MODES = [
    { id: 'standard', name: 'Standard' },
    { id: 'standard-jokers', name: 'Standard (including Jokers)' },
    { id: 'a-year-in', name: 'A Year In... (10 cards discarded)' },
    { id: 'quiet-year', name: 'The Quiet Year (ordered suites)' },
    { id: 'quiet-year-short', name: 'The Quiet Year (short game)' },
];

const SUITE_CARDS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'king',
];

const makeSuit = (suit) => SUITE_CARDS.map(card => `${suit}_${card}`);

export const CARDS = [
    ...makeSuit('diamond'),
    ...makeSuit('spade'),
    ...makeSuit('heart'),
    ...makeSuit('club'),
];

const shuffleArray = (random, array) => {
    let shuffledCards = [];
    let cards = array;

    while (cards.length) {
        const pullIndex = Math.floor(random() * cards.length);
        const pulledCards = cards.splice(pullIndex, 1);

        shuffledCards = [...shuffledCards, ...pulledCards];
    };

    return shuffledCards;
};

const shuffleStandard = (random) => shuffleArray(random, [...CARDS]);

const shuffleStandardJokers = (random) => shuffleArray(random, [...CARDS, 'joker_black', 'joker_red']);

const shuffleAYearIn = (random) => drop(10, shuffleArray(random, [...CARDS]));

const shuffleQuietYear = (random) => ([
    ...shuffleArray(random, makeSuit('heart')),
    ...shuffleArray(random, makeSuit('diamond')),
    ...shuffleArray(random, makeSuit('club')),
    ...shuffleArray(random, makeSuit('spade')),
]);

const shuffleQuietYearShort = (random) => {
    const hearts = drop(4, shuffleArray(random, makeSuit('heart')));
    const diamonds = drop(3, shuffleArray(random, makeSuit('diamond')).filter(card => card !== 'diamond_king'));
    const clubs = drop(4, shuffleArray(random, makeSuit('club')));
    let spades = drop(4, shuffleArray(random, makeSuit('spade')));

    while (spades.indexOf('spade_king') === -1) {
        spades = drop(4, shuffleArray(random, makeSuit('spade')));
    }

    return [
        ...hearts,
        ...diamonds,
        ...clubs,
        ...spades
    ];
};

const shuffleCards = (seed, mode) => {
    const random = seedRandom(seed);

    switch (mode) {
        case 'standard-jokers':
            return shuffleStandardJokers(random);
        case 'a-year-in':
            return shuffleAYearIn(random);
        case 'quiet-year':
            return shuffleQuietYear(random);
        case 'quiet-year-short':
            return shuffleQuietYearShort(random);
        case 'standard':
        default:
            return shuffleStandard(random);
    }
};

const deckBackColor = (seed, mode) => {
    const random = seedRandom(`${seed}${mode}`);

    return colors[Math.floor(random() * colors.length)];
};

const useDeck = () => {
    const [seed, setSeed] = useState();
    const [deck, setDeck] = useState([]);
    const [draw, setDraw] = useState([]);
    const [cardBack, setCardBack] = useState('#000000');

    const drawCard = () => {
        const drawnCard = deck.shift();
        if (!drawnCard) return;

        setDeck([...deck]);
        setDraw([...draw, drawnCard]);
    };

    const shuffleDeck = (seed, mode) => {
        console.log('SHUFFLING', seed);
        setDraw([]);
        setDeck(shuffleCards(seed, mode));
        setCardBack(deckBackColor(seed, mode));
    };

    return [
        deck,
        draw,
        cardBack,
        drawCard,
        shuffleDeck,
    ];
};

export default useDeck;
