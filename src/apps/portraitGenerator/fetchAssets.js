const loadImage = (url) => new Promise((resolve) => {
    const image = new Image();

    image.addEventListener('load', () => resolve(image));
    image.src = url;
});

let assets;

const fetchAssets = async (urls) => {
    if (assets && assets.length === urls.length) return assets;

    const fetched = await Promise.all(urls.map(loadImage));

    assets = fetched;

    return assets;
};

export default fetchAssets;
