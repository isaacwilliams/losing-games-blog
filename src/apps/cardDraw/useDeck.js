import { useState, useEffect, useCallback } from 'react';
import seedRandom from 'seed-random';

import { colors } from '../portraitGenerator/portraitConstants';

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

const shuffleCards = (seed) => {
    const random = seedRandom(seed);

    let shuffledCards = [];
    let cards = [...CARDS];

    while (cards.length) {
        const pullIndex = Math.floor(random() * cards.length);
        const pulledCards = cards.splice(pullIndex, 1);

        shuffledCards = [...shuffledCards, ...pulledCards];
    };

    const includeJoker = seed.endsWith('_joker');
    if (includeJoker) {
        const jokerInsertPoint = shuffledCards.length - Math.floor(random() * 10);
        shuffledCards.splice(jokerInsertPoint, 0, 'joker_red');
    }

    return shuffledCards;
};

const deckBackColor = (seed) => {
    const random = seedRandom(seed);

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

    const shuffleDeck = (seed) => {
        console.log('SHUFFLING', seed);
        setDraw([]);
        setDeck(shuffleCards(seed));
        setCardBack(deckBackColor(seed));
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
