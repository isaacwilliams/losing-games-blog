
import { last } from 'lodash/fp';
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

export const createSeed = (suffix) => {
    let seed = '';

    while (seed.length < 6) {
        seed = seed + ALPHA[Math.floor(Math.random() * ALPHA.length)];
    }

    return `${seed}`;
};

export const getLocationSeed = () => {
    if (typeof window !== `undefined`) {
        const hash = window.document.location.hash;
        const parsed = hash.match(/seed=([^&]*)/);
        return last(parsed);
    }
};

export const getLocationMode = () => {
    if (typeof window !== `undefined`) {
        const hash = window.document.location.hash;
        const parsed = hash.match(/mode=([^&]*)/);
        return last(parsed);
    }
};
