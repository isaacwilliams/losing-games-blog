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
    const hairColor = colors[r(hairVariance)];
    const clothingColor = colors[r(clothingVariance)];
    const accessoryColor = colors[r(clothingVariance)];

    const heads = createSpriteSheet(imgHeads, 512, 512);
    const eyes = createSpriteSheet(imgEyes, 512, 512);
    const noses = createSpriteSheet(imgNoses, 512, 512);
    const mouths = createSpriteSheet(imgMouths, 512, 512);
    const hairFront = createSpriteSheet(imgHairFront, 512, 512);
    const hairBack = createSpriteSheet(imgHairBack, 512, 512);
    const bodies = createSpriteSheet(imgBodies, 512, 512);
    const bodiesSkin = createSpriteSheet(imgBodiesSkin, 512, 512);
    const accessoryFront = createSpriteSheet(imgAccessoryFront, 512, 512);
    const accessoryBack = createSpriteSheet(imgAccessoryBack, 512, 512);

    const hairId = r(hairFront.size);
    const bodyId = r(12);
    const accessoryId = r(accessoryFront.size);

    ctx.drawImage(recolorImage(accessoryBack.sprite(accessoryId), accessoryColor), 0, 0);
    ctx.drawImage(recolorImage(hairBack.sprite(hairId), hairColor), 0, 0);
    ctx.drawImage(recolorImage(bodiesSkin.sprite(bodyId), skinColor), 0, 0);
    ctx.drawImage(recolorImage(bodies.sprite(bodyId), clothingColor), 0, 0);
    ctx.drawImage(recolorImage(heads.sprite(r(heads.size)), skinColor), 0, 0);
    ctx.drawImage(mouths.sprite(r(mouths.size)), 0, 0);
    ctx.drawImage(eyes.sprite(r(eyes.size)), 0, 0);
    ctx.drawImage(recolorImage(noses.sprite(r(noses.size)), skinColor), 0, 0);
    ctx.drawImage(recolorImage(hairFront.sprite(hairId), hairColor), 0, 0);
    ctx.drawImage(recolorImage(accessoryFront.sprite(accessoryId), accessoryColor), 0, 0);
};

export default drawPortrait;
