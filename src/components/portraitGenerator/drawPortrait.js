import createSpriteSheet from './createSpriteSheet';
import fetchAssets from './fetchAssets';
import recolorImage from './recolorImage';
import { colors } from './portraitConstants';

const r = (size) => Math.floor(Math.random() * size);

const drawPortrait = async (canvas, skinVariance = 12, hairVariance = 24, clothingVariance = 32) => {
    const ctx = canvas.getContext('2d');

    const [
        imgHeads,
        imgEyes,
        imgNoses,
        imgMouths,
        imgHairFront,
        imgHairBack,
        imgBodies,
        imgBodiesSkin,
        imgAccessoryFront,
        imgAccessoryBack,
    ] = await fetchAssets([
        require('./img/heads.png'),
        require('./img/eyes.png'),
        require('./img/noses.png'),
        require('./img/mouths.png'),
        require('./img/hair-front.png'),
        require('./img/hair-back.png'),
        require('./img/bodies.png'),
        require('./img/bodies-skin.png'),
        require('./img/accessory-front.png'),
        require('./img/accessory-back.png'),
    ]);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const skinColor = colors[r(skinVariance)];
    const coloredHeads = recolorImage(imgHeads, skinColor);
    const coloredNoses = recolorImage(imgNoses, skinColor);
    const coloredBodiesSkin = recolorImage(imgBodiesSkin, skinColor);

    const hairColor = colors[r(hairVariance)];
    const coloredHairFront = recolorImage(imgHairFront, hairColor);
    const coloredHairBack = recolorImage(imgHairBack, hairColor);

    const clothingColor = colors[r(clothingVariance)];
    const coloredBodies = recolorImage(imgBodies, clothingColor);

    const accessoryColor = colors[r(clothingVariance)];
    const coloredAccessoryFront = recolorImage(imgAccessoryFront, accessoryColor);
    const coloredAccessoryBack = recolorImage(imgAccessoryBack, accessoryColor);

    const heads = createSpriteSheet(coloredHeads, 512, 512);
    const eyes = createSpriteSheet(imgEyes, 512, 512);
    const noses = createSpriteSheet(coloredNoses, 512, 512);
    const mouths = createSpriteSheet(imgMouths, 512, 512);
    const hairFront = createSpriteSheet(coloredHairFront, 512, 512);
    const hairBack = createSpriteSheet(coloredHairBack, 512, 512);
    const bodies = createSpriteSheet(coloredBodies, 512, 512);
    const bodiesSkin = createSpriteSheet(coloredBodiesSkin, 512, 512);
    const accessoryFront = createSpriteSheet(coloredAccessoryFront, 512, 512);
    const accessoryBack = createSpriteSheet(coloredAccessoryBack, 512, 512);

    const hairId = r(hairFront.size);
    const bodyId = r(12);
    const accessoryId = r(accessoryFront.size);

    accessoryBack.draw(ctx, accessoryId, 0, 0);
    hairBack.draw(ctx, hairId, 0, 0);
    bodiesSkin.draw(ctx, bodyId, 0, 0);
    bodies.draw(ctx, bodyId, 0, 0)
    heads.draw(ctx, r(heads.size), 0, 0);
    mouths.draw(ctx, r(mouths.size), 0, 0);
    eyes.draw(ctx, r(heads.size), 0, 0);
    noses.draw(ctx, r(heads.size), 0, 0);
    hairFront.draw(ctx, hairId, 0, 0);
    accessoryFront.draw(ctx, accessoryId, 0, 0);
};

export default drawPortrait;
