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

    const def = {
        density: rand(8, 12),
        count: rand(0.1, 0.2),
        type: 'forest',
        ...randRect(-50, width - 50, -50, height - 50, 10, 200, 10, 200)
    };

    return {
        ...data,
        areas: [...data.areas, def],
        elements: [...data.elements, ...makeCluster(def, spriteSheet, 2)],
    };
}

const makeSwamp = (data, spriteSheet) => {
    if (chance(0.5)) return data;

    const { width, height } = data;

    const def = {
        density: rand(4, 10),
        count: rand(0.1, 0.2),
        type: 'swamp',
        ...randRect(-50, width - 50, -50, height - 50, 10, 150, 10, 150)
    }

    return {
        ...data,
        areas: [...data.areas, def],
        elements: [...data.elements, ...makeCluster(def, spriteSheet, 1)],
    };
}

const makeFields = (data, spriteSheet, feature) => {
    if (chance(0.25)) return data;

    const { width, height } = data;

    const fieldSize = {
        width: rand(50, 200),
        height: rand(50, 150),
    };

    const def = {
        density: rand(30, 60),
        count: rand(0.2, 0.5),
        type: 'farm',
        x: feature.x - fieldSize.width / 2 + 64,
        y: feature.y - fieldSize.height / 2 + 64,
        ...fieldSize,
    };

    return {
        ...data,
        areas: [...data.areas, def],
        elements: [...data.elements, ...makeCluster(def, spriteSheet, 0)],
    };
}

const makeHills = (data, spriteSheet) => {
    if (chance(0.5)) return data;

    const { width, height } = data;

    const def = {
        density: 50,
        count: 1,
        type: 'hills',
        ...randRect(-50, width - 50, -50, height - 50, 50, 120, 50, 100),
    };

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

    let x = rand(20, width - 80);
    let y = rand(20, height - 128);

    if (features.length) {
        let tries = 0;
        while (minDist(x, y, features) < 64 && tries < 10) {
            x = rand(20, width - 80);
            y = rand(20, height - 128);
            tries = tries + 1;
        }
    }

    const def = {
        type,
        name,
        sprite,
        x,
        y,
        connectionCount: 0,
        layer: 10,
        spriteSheet,
    }

    return {
        ...data,
        features: [...data.features, def],
        elements: [...data.elements, def],
    };
};

const dist = (f1, f2) => Math.sqrt((f1.x - f2.x) * (f1.x - f2.x) + (f1.y - f2.y) * (f1.y - f2.y));

const findClosest = (f1) => (features) => features.reduce((currentClosestFeature, feature) => {
    if (feature === f1) return currentClosestFeature;

    const distance = dist(f1, feature);
    const currDistance = dist(f1, currentClosestFeature);

    if (distance < currDistance) return feature;
    return currentClosestFeature;
}, features.find((f2) => f2 !== f1))

const makeRoad = (data, startFeature) => {
    const { features, width, height } = data;

    let f1;
    let f2;

    if (features.length > 0 || chance(0.1)) {
        f1 = startFeature;
        f1.connectionCount++;
    }

    if (f1 && features.length >= 2 || chance(0.1)) {
        f2 = findClosest(f1)(features.filter(() => chance(0.7)));
        f2 && f2.connectionCount++;
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


    if (dist < 50) return data;

    const roadType = selectRand([
        {
            wanderChance: 0.1,
            wanderFactor: 0.12,
            width: 2,
            color: '#000',
            dash: [3],
            maxLenth: 100,
        },
        {
            wanderChance: 0.15,
            wanderFactor: 0.3,
            width: 2,
            color: '#000',
            dash: [5],
            maxLenth: 80,
        },
        {
            wanderChance: 0.3,
            wanderFactor: 0.25,
            width: 2,
            color: '#666',
            dash: [5],
            maxLenth: 70,
        },
        {
            wanderChance: 0.4,
            wanderFactor: 0.25,
            width: 1,
            color: '#999',
            dash: [3],
            maxLenth: 80,
        }
    ]);

    const def = {
        ...roadType,
        startX: f1.x + 64,
        startY: f1.y + 96,
        endX: f2.x + 64,
        endY: f2.y + 96,
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
            wanderChance: 0.1,
            wanderFactor: 0.15,
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
            wanderChance: 0.1,
            wanderFactor: 0.15,
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
    const hillsCount = (area / 20) * (mountains - 0.1);
    const forestCount = (area / 30) * woods;
    const swampCount = (area / 40) * (1 - (mountains - 0.1));

    const featureBase = area / 100;
    const featureRatio = featureDensity * ((civilized + 0.5));
    const featureCount = rand(
        featureDensity * featureBase - 3,
        featureDensity * featureBase
    );

    const roadCount = (featureCount * civilized);

    let i;

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

    const villages = mapData.features.filter(f => f.type === 'village');

    villages.forEach((village) => {
        mapData = makeFields(mapData, spriteSheets.fields, village);
    });

    if (chance(0.25)) {
        mapData = makeRiver(mapData)
    };

    mapData.features.forEach((feature) => {
        mapData = makeRoad(mapData, feature);
    });


    return mapData;
};

export default createMapData;
