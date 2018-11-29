import gen from 'random-seed';
import { LETTERS } from './lists';

let randGen = gen.create();

export const findIntersection = (r1, r2) => {
    if (!r1 || !r2) return false;

    const left1 = r1.x;
    const right1 = r1.x + r1.width;
    const top1 = r1.y;
    const bottom1 = r1.y + r1.height;

    const left2 = r2.x;
    const right2 = r2.x + r2.width;
    const top2 = r2.y;
    const bottom2 = r2.y + r2.height;

    return !(left2 > right1 ||
          right2 < left1 ||
          top2 > bottom1 ||
          bottom2 < top1);
}

export const findCollisions = (rect, rectList) => rectList.filter((r) => findIntersection(rect, r));

export const getSeed = () => {
    let seed = '';
    for (var i = 0; i < 10; i++) {
        seed += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
    return seed;
};

export const setSeed = (seed) => randGen.seed(seed);

export const chance = (n) => randGen.random() < n;
export const rand = (min, max) => randGen.floatBetween(min, max);
export const selectRand = (list) => list[Math.floor(rand(0, list.length))];
export const randNot = (min, max, not) => {
    let val = Math.floor(rand(min, max));
    let tries = 0;
    while (val === not && tries < 1000) {
        val = Math.floor(rand(min, max));
        tries = tries + 1;
    }
    return val;
}
export const selectRandNot = (list, not) => {
    let val = selectRand(list);
    let tries = 0;
    while (val === not && tries < 1000) {
        val = selectRand(list);
        tries = tries + 1;
    }
    return val;
}

export const randRect = (minX, maxX, minY, maxY, minWidth, maxWidth, minHeight, maxHeight) => ({
    x: rand(minX, maxX),
    y: rand(minY, maxY),
    width: rand(minWidth, maxWidth),
    height: rand(minHeight, maxHeight),
});

export const randRectWithoutCollision = (minX, maxX, minY, maxY, minWidth, maxWidth, minHeight, maxHeight, rectList) => {
    console.log(rectList);
    let tries = 0;
    while (tries < 1000) {
        const rect = randRect(minX, maxX, minY, maxY, minWidth, maxWidth, minHeight, maxHeight);
        const collisions = findCollisions(rect, rectList);
        if (!collisions.length) {
            return rect;
        }
        tries ++;
    }
};
