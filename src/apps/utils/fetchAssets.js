const loadImage = (url) => new Promise((resolve) => {
    const image = new Image();

    image.addEventListener('load', () => resolve(image));
    image.src = url;
});

const fetchAssets = (urls) => (
    Promise.all(urls.map(loadImage))
);

export default fetchAssets;
