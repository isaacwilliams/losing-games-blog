import {
    findIntersection,
    findCollisions,
    rand,
    setSeed,
    selectRand,
    selectRandNot,
    randRect,
    randRectWithoutCollision,
    chance,
} from './util';

import { makeName } from'./names';

import {
    FEATURE_TYPES,
    FEATURE_NAMES,
    FEATURE_SPRITES,
} from './lists';

const makeCluster = (cluster, spriteSheet, layer) => {
    const width = cluster.width / cluster.density;
    const height = cluster.height / cluster.density;

    const clusterElements = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (chance(cluster.count)) {
                const def = {
                    x: x * cluster.density + rand(-cluster.density / 2, cluster.density / 2) + cluster.x,
                    y: y * cluster.density + rand(-cluster.density / 2, cluster.density / 2) + cluster.y,
                    sprite: rand(0, spriteSheet.size),
                    layer,
                    spriteSheet,
                };

                clusterElements.push(def);
            }
        }
    }

    return clusterElements;
}

const makeForest = (data, spriteSheet) => {
    if (chance(0.5)) return data;

    const { width, height } = data;

    const rect = randRect(-50, width - 50, -50, height - 50, 10, 200, 10, 200);
    const def = Object.assign({
        density: rand(8, 12),
        count: rand(0.1, 0.2),
        type: 'forest',
    }, rect);

    return {
        ...data,
        areas: [...data.areas, def],
        elements: [...data.elements, ...makeCluster(def, spriteSheet, 2)],
    };
}

const makeSwamp = (data, spriteSheet) => {
    if (chance(0.5)) return data;

    const { width, height } = data;

    const rect = randRect(-50, width - 50, -50, height - 50, 10, 150, 10, 150);
    const def = Object.assign({
        density: rand(2, 10),
        count: rand(0.1, 0.2),
        type: 'swamp',
    }, rect);

    return {
        ...data,
        areas: [...data.areas, def],
        elements: [...data.elements, ...makeCluster(def, spriteSheet, 2)],
    };
}

const makeFields = (data, spriteSheet) => {
    if (chance(0.5)) return data;

    const { width, height } = data;

    const rect = randRect(-50, width - 50, -50, height - 50, 50, 200, 50, 150);
    const def = Object.assign({
        density: rand(30, 60),
        count: rand(0.2, 0.5),
        type: 'farm',
    }, rect);

    return {
        ...data,
        areas: [...data.areas, def],
        elements: [...data.elements, ...makeCluster(def, spriteSheet, 0)],
    };
}

const makeHills = (data, spriteSheet) => {
    if (chance(0.5)) return data;

    const { width, height } = data;

    const rect = randRect(-50, width - 50, -50, height - 50, 50, 120, 50, 100);
    const def = Object.assign({
        density: 50,
        count: 1,
        type: 'hills',
    }, rect);

    return {
        ...data,
        areas: [...data.areas, def],
        elements: [...data.elements, ...makeCluster(def, spriteSheet, 1)],
    };
}

const minDist = (x, y, features) => {
    let dist = 10000;
    features.forEach((f) => {
        const d = Math.sqrt((x - f.x) * (x - f.x) + (y - f.y) * (y - f.y));
        dist = Math.min(dist, d);
    });
    return dist;
};

const selectFeatureType = (civilizedWeighting) => {
    switch (civilizedWeighting) {
        case 1:
        case 0.9:
            return selectRand(['castle', 'castle', 'village', 'village', 'village', 'village']);
        case 0.8:
        case 0.7:
            return selectRand(['castle', 'castle',  'village', 'village', 'village', 'ruin']);
        case 0.6:
        case 0.5:
            return selectRand(['castle', 'castle',  'village', 'village', 'ruin', 'ruin']);
        case 0.4:
        case 0.3:
            return selectRand(['castle', 'castle',  'village', 'ruin', 'ruin', 'ruin']);
        case 0.4:
        case 0.3:
            return selectRand(['castle', 'village',  'ruin', 'ruin', 'ruin', 'ruin']);
        case 0.2:
        case 0.1:
            return selectRand(['castle', 'ruin',  'ruin', 'ruin', 'ruin', 'ruin']);
        case 0:
            return 'ruin';
        default:
            return selectRand(['castle', 'castle',  'village', 'village', 'ruin', 'ruin']);
    }
}

const makeFeature = (data, spriteSheet) => {
    const { width, height, features, options } = data;

    const type = selectFeatureType(options.civilized);
    const name = makeName(type);
    const sprite = selectRand(FEATURE_SPRITES[type]);

    let x = rand(10, width - 80);
    let y = rand(32, height - 32);

    if (features.length) {
        let tries = 0;
        while (minDist(x, y, features) < 64 && tries < 10) {
            x = rand(20, width - 80);
            y = rand(64, height - 32);
            tries = tries + 1;
        }
    }

    const def = {
        type,
        name,
        sprite,
        x,
        y,
        layer: 10,
        spriteSheet,
    }

    return {
        ...data,
        features: [...data.features, def],
        elements: [...data.elements, def],
    };
};

const makeRoad = (data) => {
    const { features, width, height } = data;

    let f1;
    let f2;

    if (features.length > 0 || chance(0.1)) {
        f1 = selectRand(features);
    }

    if ((f1 && features.length >= 2) || chance(0.1)) {
        f2 = selectRandNot(features, f1);
    }

    if (!f1) {
        f1 = {
            x: rand(-100, width + 100),
            y: rand(-100, height + 100),
        }
    }

    if (!f2) {
        f2 = {
            x: rand(-100, width + 100),
            y: rand(-100, height + 100),
        }
    }

    const dist = Math.sqrt((f1.x - f2.x) * (f1.x - f2.x) + (f1.y - f2.y) * (f1.y - f2.y));

    if (dist < 50) return data;

    const roadType = selectRand([
        {
            wanderChance: 0.0,
            wanderFactor: 0.12,
            width: 2,
            color: '#000',
            dash: [3],
            maxLenth: 70,
        }
    ]);

    const def = {
        ...roadType,
        startX: f1.x + 64,
        startY: f1.y + 64,
        endX: f2.x + 64,
        endY: f2.y + 64,
    };

    return {
        ...data,
        paths: [...data.paths, def]
    }
};

const makeRiver = (data) => {
    const { width, height } = data;
    const dir = selectRand([ 'v', 'h' ]);

    let def;

    if (dir === 'v') {
        def = {
            startX: rand(0, width),
            startY: -10,
            endX: rand(0, width),
            endY: height + 10,
            wanderChance: 0.2,
            wanderFactor: 0.25,
            width: 3,
            color: '#999',
            dash: [],
            maxLenth: 300,
        };
    } else {
        def = {
            startX: -10,
            startY: rand(0, height),
            endX: height + 10,
            endY: rand(0, height),
            wanderChance: 0.2,
            wanderFactor: 0.25,
            width: 3,
            color: '#999',
            dash: [],
            maxLenth: 300,
        };
    }

    return {
        ...data,
        paths: [...data.paths, def]
    };
};

const createMapData = ({ spriteSheets, width, height, seed = 'xxx', options }) => {
    setSeed(seed);

    let mapData = {
        width,
        height,
        areas: [],
        features: [],
        elements: [],
        paths: [],
        options,
    };

    const {
        featureDensity,
        civilized,
        mountains,
        woods,
    } = options;

    const area = (width * height) / 1000;

    const fieldsCount = (area / 40) * civilized;
    const hillsCount = (area / 20) * mountains;
    const forestCount = (area / 30) * woods;
    const swampCount = (area / 40) * (1 - mountains);

    const featureRatio = featureDensity * ((civilized + 0.5));
    const featureCount = rand(
        featureDensity * 8 - 3,
        featureDensity * 8
    );

    console.log(featureDensity * 8, featureCount);

    let i;

    for (i = 0; i < fieldsCount; i++) {
        mapData = makeFields(mapData, spriteSheets.fields);
    }

    for (i = 0; i < hillsCount; i++) {
        mapData = makeHills(mapData, spriteSheets.hills);
    }

    for (i = 0; i < forestCount; i++) {
        mapData = makeForest(mapData, spriteSheets.trees);
    }

    for (i = 0; i < swampCount; i++) {
        mapData = makeSwamp(mapData, spriteSheets.swamp);
    }

    for (i = 0; i < featureCount; i++) {
        mapData = makeFeature(mapData, spriteSheets.feature);
    }

    if (chance(0.25)) {
        mapData = makeRiver(mapData)
    };

    for (i = 0; i < mapData.features.length + 1; i++) {
        mapData = makeRoad(mapData);
    }


    return mapData;
};

export default createMapData;
