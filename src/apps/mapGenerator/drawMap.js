import recolorImage from '../utils/recolorImage';
import drawPreloader from '../utils/drawPreloader';
import createMapData from './createMapData';

import {
    findIntersection,
    findCollisions,
    rand,
    selectRand,
    selectRandNot,
    randRect,
    randRectWithoutCollision,
    chance,
    setSeed,
    getSeed,
} from './util';

import { makeName } from'./names';

import {
    FEATURE_TYPES,
    FEATURE_NAMES,
    FEATURE_SPRITES,
} from './lists';

const getDist = (startX, startY, endX, endY) => Math.sqrt((startX - endX) * (startX - endX) + (startY - endY) * (startY - endY));
const getAngle = (startX, startY, endX, endY) => Math.atan2(endY - startY, endX - startX);

const renderLine = (ctx, def) => {
    const {
        startX,
        startY,
        endX,
        endY,
        wanderChance,
        wanderFactor,
        width,
        color,
        dash,
        maxLenth = 1000,
    } = def;

    const dist = getDist(startX, startY, endX, endY);

    let px = startX;
    let py = startY;
    let dir = getAngle(startX, startY, endX, endY);
    let steps = 0;
    let pDist = dist;

    ctx.fillRect(endX, endY, 10, 10);

    ctx.beginPath();
    ctx.moveTo(startX, startY);

    while (pDist > 32 && steps < maxLenth) {
        px = px + Math.cos(dir) * 10;
        py = py + Math.sin(dir) * 10;

        ctx.lineTo(px, py);
        pDist = getDist(px, py, endX, endY);


        const currentAngle = getAngle(px, py, endX, endY);
        if (Math.floor(currentAngle - dir) > 0.05) {
            if (currentAngle < dir) {
                dir -= wanderFactor * 2;
            } else {
                dir += wanderFactor * 2;
            }
        } else {
            const wander = rand(0, 1);
            if (wander < wanderChance) {
                dir -= wanderFactor;
            } else if (wander > 1 - wanderChance) {
                dir += wanderFactor;
            }
        }

        steps++;
    }

    ctx.strokeStyle = "#fff";
    ctx.lineWidth = width + 4;
    ctx.setLineDash([]);
    ctx.stroke();

    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash(dash);
    ctx.stroke();

    ctx.closePath();
};

const renderElement = ({ width, height }, ctx, def) => {
    if (def.x < 0 || def.y < 0 ||
        def.x - def.spriteSheet.frameWidth > width ||
        def.y - def.spriteSheet.frameHeight > height) return;

    const spriteSheet = def.spriteSheet;

    ctx.drawImage(spriteSheet.sprite(def.sprite), def.x, def.y);
}

const sizeFontForWidth = (ctx, text, maxSize, width) => {
    var size = maxSize;
    ctx.font = `${size}px Arial`;

    while (ctx.measureText(text).width > width) {
        size -= 1;
        ctx.font = `${size}px Arial`;
    }

    return ctx
}

const renderFeature = (data, ctx, def) => {
    const spriteSheet = def.spriteSheet;

    ctx.drawImage(spriteSheet.sprite(def.sprite), def.x, def.y);

    if (!def.name) return;

    const nameRect = {
        x: def.x - 32,
        y: def.y,
        height: 14,
        width: 128,
    }

    const opts = {
        vAlign: 'center',
        hAlign: 'center',
        textFillStyle: '#000',
        rectFillStyle: '#fff',
        rectFillOnlyText: true,
        fillPadding: 1,
        minSize: 16,
        maxSize: 16,
    }
    //
    // ctx.strokeStyle = "#fff";
    // ctx.lineWidth = 6;
    // ctx.fillStyle = "#000";
    // ctx.textAlign = "center";
    // ctx.font = "16px Arial";
    //
    // sizeFontForWidth(ctx, def.name, 16, 128)
    //
    // ctx.strokeText(def.name, def.x + 64, def.y + 130);
    // ctx.fillText(def.name, def.x + 64, def.y + 130);
    // drawText(ctx, def.name, font, nameRect, opts);
}

const makeRegionName = () => makeName('region');

const drawMap = async (canvas, mapData, spriteSheets) => {
    const ctx = canvas.getContext('2d');

    const {
        feature,
        fields,
        hills,
        swamp,
        trees
    } = spriteSheets;

    const sortY = (a, b) => a.y - b.y;

    const { elements, features, paths } = mapData;

    const layer0 = elements.filter((def) => def.layer === 0).sort(sortY);
    const layer1 = elements.filter((def) => def.layer === 1).sort(sortY);
    const layer2 = elements.filter((def) => def.layer === 2).sort(sortY);
    const layer10 = elements.filter((def) => def.layer === 10).sort(sortY);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    layer0.forEach((def) => renderElement(mapData, ctx, def));
    layer1.forEach((def) => renderElement(mapData, ctx, def));
    paths.forEach(def => renderLine(ctx, def));
    layer2.forEach((def) => renderElement(mapData, ctx, def));
    layer10.forEach((def) => renderFeature(mapData, ctx, def));
};

export default drawMap;
