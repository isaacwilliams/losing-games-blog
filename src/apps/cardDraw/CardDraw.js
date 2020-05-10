import React, { useState, useEffect } from 'react';
import { last } from 'lodash/fp';
import _ from 'lodash';
import styled from 'styled-components';

import Button from '../../components/shared/Button';

import useDeck, { CARDS, SHUFFLE_MODES } from './useDeck';
import {
    createSeed,
    getLocationSeed,
    getLocationMode,
} from './seedUtils';

const cardSvg = require('./svg-cards.svg');

const DrawButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;
`;

const ShuffuleUtils = styled.div`
    color: grey;
    font-size: 0.9rem;

    strong {
        font-weight: bold;
    }
`;

const ShuffleInput = styled.span`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const DrawDeckContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const DrawDeck = styled.div`
    position: relative;
    display: flex;

    &.empty {
        svg {
            opacity: 0.2;
        }
    }
`;

const CardCountOverlay = styled.div`
    position: absolute;
    display: flex;

    align-items: center;
    justify-content: center;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    div {
        background: white;
        border-radius: 0.3rem;
        padding: 0.5rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
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

const CardDraw = (props) => {
    const [seed, setSeed] = useState(getLocationSeed() || createSeed());
    const [shuffleMode, setShuffleMode] = useState(getLocationMode() || SHUFFLE_MODES[0].id);

    useEffect(() => {
        shuffleDeck(seed, shuffleMode);

        if (typeof window !== `undefined`) {
            window.document.location.hash = `seed=${seed}&mode=${shuffleMode}`;
        }
    }, [seed, shuffleMode]);

    const [
        deck,
        draw,
        deckBackColor,
        drawCard,
        shuffleDeck,
    ] = useDeck();

    return (
        <div>
            <DrawButtonsContainer>
                <div>
                    <div>
                        <Button onClick={() => setSeed(createSeed())}>Shuffle</Button>
                    </div>

                    <ShuffuleUtils>
                        Shuffle type:
                        <ShuffleInput>
                            <select value={shuffleMode} onChange={(e) => setShuffleMode(e.target.value)}>
                                {SHUFFLE_MODES.map(({ id, name }) => (
                                    <option key={id} value={id}>{name}</option>
                                ))}
                            </select>
                        </ShuffleInput>

                        Seed:
                        <ShuffleInput>
                            <input type="text"
                                    value={seed}
                                    onChange={e => setSeed(e.target.value)} />
                        </ShuffleInput>
                    </ShuffuleUtils>
                </div>
                <Button onClick={drawCard}>Draw</Button>
            </DrawButtonsContainer>

            <DrawDeckContainer>
                <DrawDeck className={deck.length === 0 ? 'empty' : null}>
                    <svg width={169} height={244}>
                        <use xlinkHref={`${cardSvg}#back`} x="0" y="0" fill={deckBackColor}/>}
                    </svg>

                    <CardCountOverlay>
                        <div>
                            {deck.length} {deck.length === 1 ? 'card' : 'cards'}
                        </div>
                    </CardCountOverlay>
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
