import randomGen from 'random-seed';

const pick = (r) => (array) => array[r(array.length)];

const FEATURE_TYPES = [
    'castle',
    'castle',
    'village',
    'village',
    'village',
    'ruin',
];

const FEATURE_SPRITES = {
    castle: [0, 1, 0, 1, 2, 17],
    village: [3, 4, 5, 6, 7, 8, 9],
    ruin: [10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
}

const createFeatures = (r) => {
    const pickRand = pick(r);

    const features = [];
    const featuresCount = r(4) + 1;

    for (var i = 0; i < featuresCount; i++) {
        const type = pickRand(FEATURE_TYPES);
        const spriteId = pickRand(FEATURE_SPRITES[type]);

        features.push({
            id: i,
            type,
            spriteId,
            x: r.floatBetween(0, 1),
            y: r.floatBetween(0, 1)
        });
    }

    return features;
};

const createMapDef = (seed) => {
    const r = randomGen(seed);

    return ({
        features: createFeatures(r),
    });
};

export default createMapDef;
