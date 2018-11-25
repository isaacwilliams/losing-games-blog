
const createSpriteSheet = (image, spriteWidth, spriteHeight) => {
    const atlasWidth = Math.floor(image.width / spriteWidth);
    const atlasHeight = Math.floor(image.height / spriteHeight);

    return {
        image: image,
        size: atlasWidth * atlasHeight,
        draw: (context, spriteId, posX, posY) => {
            const locX = spriteId % atlasWidth;
            const locY = Math.floor(spriteId / atlasWidth);

            context.drawImage(
                image,
                locX * spriteWidth,
                locY * spriteHeight,
                spriteWidth,
                spriteHeight,
                posX,
                posY,
                spriteWidth,
                spriteHeight
            );
        }
    };
};

export default createSpriteSheet;
