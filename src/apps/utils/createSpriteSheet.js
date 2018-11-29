
const createSpriteSheet = (image, spriteWidth, spriteHeight) => {
    const atlasWidth = Math.floor(image.width / spriteWidth);
    const atlasHeight = Math.floor(image.height / spriteHeight);

    return {
        image: image,
        size: atlasWidth * atlasHeight,
        sprite: (spriteId) => {
            const locX = Math.floor(spriteId % atlasWidth);
            const locY = Math.floor(spriteId / atlasWidth);

            // create offscreen buffer,
            const buffer = document.createElement('canvas');
            buffer.width = spriteWidth;
            buffer.height = spriteHeight;
            const bx = buffer.getContext('2d');

            bx.drawImage(
                image,
                locX * spriteWidth,
                locY * spriteHeight,
                spriteWidth,
                spriteHeight,
                0,
                0,
                spriteWidth,
                spriteHeight
            );

            return buffer;
        },
    };
};

export default createSpriteSheet;
