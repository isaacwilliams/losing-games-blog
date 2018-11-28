const recolorImage = (image, color) => {
    // create offscreen buffer,
    const buffer = document.createElement('canvas');
    buffer.width = image.width;
    buffer.height = image.height;
    const bx = buffer.getContext('2d');

    bx.fillStyle = color;
    bx.fillRect(0, 0, buffer.width, buffer.height);

    bx.globalCompositeOperation = "multiply";
    bx.drawImage(image, 0, 0);

    bx.globalCompositeOperation = "destination-in";
    bx.drawImage(image, 0, 0);

    return buffer;
};

export default recolorImage;
