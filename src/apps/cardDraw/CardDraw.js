import React, { useState, useEffect } from 'react';
import { shuffle, last, drop, reverse } from 'lodash/fp';
import styled from 'styled-components';

import Button from '../../components/shared/Button';

import useDeck, { CARDS } from './useDeck';

const cardSvg = require('./svg-cards.svg');

const DrawButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;
`;

const Seed = styled.span`
    margin-left: 1rem;
    color: grey;

    strong {
        font-weight: bold;
    }
`;

const DrawDeckContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const DrawDeck = styled.div`
    display: flex;

    &.empty {
        opacity: 0.2;
    }
`;

const DrawCard = styled.div`
    display: flex;
`;

const DrawHistoryList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    width: 700px;
`;

const DrawHistoryCard = styled.li`
    margin: 0.1rem;
    opacity: 0.2;

    &.active {
        opacity: 1;
    }
`;

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const getLocationSeed = () => {
    const hash = document.location.hash;
    return hash && hash.replace('#', '');
};

const createSeed = (suffix = '') => {
    let seed = '';

    while (seed.length < 6) {
        seed = seed + ALPHA[Math.floor(Math.random() * ALPHA.length)];
    }

    return `${seed}${suffix}`;
};

const CardDraw = (props) => {
    const [seed, setSeed] = useState(getLocationSeed() || createSeed());

    const [
        deck,
        draw,
        deckBackColor,
        drawCard,
        shuffleDeck,
    ] = useDeck();

    const newSeed = () => {
        setSeed(createSeed(seed.endsWith('_joker') ? '_joker' : ''));
    };

    useEffect(() => {
        shuffleDeck(seed);
        document.location.hash = seed;
    }, [seed]);

    return (
        <div>
            <DrawButtonsContainer>
                <div>
                    <Button onClick={newSeed}>Shuffle</Button>

                    <Seed>Seed: <strong>{seed}</strong></Seed>
                </div>
                <Button onClick={drawCard}>Draw</Button>
            </DrawButtonsContainer>

            <DrawDeckContainer>
                <DrawDeck className={deck.length === 0 ? 'empty' : null}>
                    <svg width={169} height={244}>
                        <use xlinkHref={`${cardSvg}#back`} x="0" y="0" fill={deckBackColor}/>}
                    </svg>
                </DrawDeck>

                <DrawCard>
                    {last(draw) && (
                        <svg width={169} height={244}>
                            <use xlinkHref={`${cardSvg}#${last(draw)}`} x="0" y="0"/>
                        </svg>
                    )}
                </DrawCard>
            </DrawDeckContainer>


            <div>
                <DrawHistoryList>
                    {CARDS.map((card) => (
                        <DrawHistoryCard key={card}
                                className={draw.indexOf(card) > -1 ? 'active' : null}>
                            <svg width={'3rem'} height={'3.5rem'} viewBox="0 0 169 244">
                                <use xlinkHref={`${cardSvg}#${card}`} x="0" y="0" />
                            </svg>
                        </DrawHistoryCard>
                    ))}
                </DrawHistoryList>
            </div>
        </div>
    );
};

export default CardDraw;
