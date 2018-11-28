import createSpriteSheet from '../utils/createSpriteSheet';
import fetchAssets from '../utils/fetchAssets';
import recolorImage from '../utils/recolorImage';
import drawPreloader from '../utils/drawPreloader';

const drawFeature = (ctx, featureSheet) => ({ id, spriteId, x, y }) => {
    ctx.drawImage(
        featureSheet.sprite(spriteId),
        x * (ctx.canvas.width - 128),
        y * (ctx.canvas.height - 128)
    )
};

let assetsCache;
const drawMap = async (canvas, mapDef) => {
    const ctx = canvas.getContext('2d');

    const loaderInverval = drawPreloader(ctx);

    const assets = assetsCache || await fetchAssets([
        require('./img/features.png'),
    ]);

    assetsCache = assets;

    const [
        imgFeatures,
    ] = assets

    clearInterval(loaderInverval);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const featureSheet = createSpriteSheet(imgFeatures, 128, 128);

    mapDef.features.forEach(drawFeature(ctx, featureSheet));

    // const pickColor = getColorPicker(fillStyle);
    //
    // const skinColor = pickColor(skinVariance);
    // const hairColor = pickColor(hairVariance);
    // const clothingColor = pickColor(clothingVariance);
    // const accessoryColor = pickColor(clothingVariance);
    //
    // const heads = createSpriteSheet(imgHeads, 512, 512);
    // const eyes = createSpriteSheet(imgEyes, 512, 512);
    // const noses = createSpriteSheet(imgNoses, 512, 512);
    // const mouths = createSpriteSheet(imgMouths, 512, 512);
    // const hairFront = createSpriteSheet(imgHairFront, 512, 512);
    // const hairBack = createSpriteSheet(imgHairBack, 512, 512);
    // const hairFace = createSpriteSheet(imgHairFace, 512, 512);
    // const bodies = createSpriteSheet(imgBodies, 512, 512);
    // const bodiesSkin = createSpriteSheet(imgBodiesSkin, 512, 512);
    // const accessoryFront = createSpriteSheet(imgAccessoryFront, 512, 512);
    // const accessoryBack = createSpriteSheet(imgAccessoryBack, 512, 512);
    //
    // const hairId = r(hairFront.size);
    // const bodyId = r(bodies.size);
    // const accessoryId = r(accessoryFront.size);
    //
    // ctx.drawImage(recolorImage(accessoryBack.sprite(accessoryId), accessoryColor), 0, 0);
    // ctx.drawImage(recolorImage(hairBack.sprite(hairId), hairColor), 0, 0);
    // ctx.drawImage(recolorImage(bodiesSkin.sprite(bodyId), skinColor), 0, 0);
    // ctx.drawImage(recolorImage(bodies.sprite(bodyId), clothingColor), 0, 0);
    // ctx.drawImage(recolorImage(heads.sprite(r(heads.size)), skinColor), 0, 0);
    // ctx.drawImage(mouths.sprite(r(mouths.size)), 0, 0);
    // ctx.drawImage(eyes.sprite(r(eyes.size)), 0, 0);
    // Math.random() < 0.1 && ctx.drawImage(recolorImage(hairFace.sprite(r(8)), hairColor), 0, 0);
    // ctx.drawImage(recolorImage(noses.sprite(r(noses.size)), skinColor), 0, 0);
    // ctx.drawImage(recolorImage(hairFront.sprite(hairId), hairColor), 0, 0);
    // ctx.drawImage(recolorImage(accessoryFront.sprite(accessoryId), accessoryColor), 0, 0);
};

export default drawMap;
