import React, { Component } from 'react';
import styled from 'styled-components';

import { getSeed } from './util';

import createMapData from './createMapData';
import drawMap from './drawMap';
import fetchAssets from '../utils/fetchAssets';
import createSpriteSheet from '../utils/createSpriteSheet';

import Button from '../../components/shared/Button';

const GeneratorOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 0;
`

const OptionLabel = styled.label`
    display: inline-block;
    width: 16rem;
`

class MapGenerator extends Component {
    state = {
        loaded: false,
        spriteSheets: null,
        seed: getSeed(),
        featureDensity: 0.5,
        civilized: 0.5,
        mountains: 0.5,
        woods: 0.5,
    }

    componentDidMount() {
        this.loadAssets();
    }

    componentDidUpdate(_, prevState) {
        if (!prevState.loaded && this.state.loaded) {
            this.draw();
        }

        if (prevState.seed !== this.state.seed) {
            this.draw();
        }
    }

    loadAssets() {
        const assets = fetchAssets([
            require('./img/features.png'),
            require('./img/fields.png'),
            require('./img/hills.png'),
            require('./img/swamp.png'),
            require('./img/trees.png'),
        ]).then(([
            imgFeature,
            imgFields,
            imgHills,
            imgSwamp,
            imgTrees,
        ]) => {
            const feature = createSpriteSheet(imgFeature, 128, 128);
            const fields = createSpriteSheet(imgFields, 200, 128);
            const hills = createSpriteSheet(imgHills, 200, 128);
            const swamp = createSpriteSheet(imgSwamp, 16, 16);
            const trees = createSpriteSheet(imgTrees, 64, 64)

            this.setState({
                loaded: true,
                spriteSheets: {
                    feature,
                    fields,
                    hills,
                    swamp,
                    trees
                }
            });
        });
    }

    draw() {
        const { seed, spriteSheets } = this.state;


        const mapData = createMapData({
            seed,
            spriteSheets,
            width: this.canvas.width,
            height: this.canvas.height,
        });

        drawMap(this.canvas, mapData, spriteSheets);
    }

    newMap() {
        this.setState({ seed: getSeed() });
    }

    download() {
        const image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        this.downloadLink.setAttribute("href", image);
    }

    render() {
        const {
            loaded,
            featureDensity,
            civilized,
            mountains,
            woods,
        } = this.state;

        if (!loaded) return <div>Loading...</div>;

        return (
            <div>
                <canvas ref={(c) => { this.canvas = c; }} width="800" height="600" />

                <br /><br />
                <p>
                    <Button onClick={() => this.newMap()}>New map</Button>
                    {' '}
                    <a ref={(c) => { this.downloadLink = c; }} download="portrait.png">
                        <Button onClick={() => this.download()}>Download</Button>
                    </a>
                </p>

                <div>
                    <GeneratorOption>
                        <OptionLabel>Empty — Populated</OptionLabel>
                        <input type="range" min="0" max="1" step="0.1"
                                value={featureDensity}
                                onChange={(event) => this.setState({ featureDensity: parseFloat(event.target.value) })} />
                    </GeneratorOption>
                    <GeneratorOption>
                        <OptionLabel>Civilized — Wild</OptionLabel>
                        <input type="range" min="0" max="1" step="0.1"
                                value={civilized}
                                onChange={(event) => this.setState({ civilized: parseFloat(event.target.value) })} />
                    </GeneratorOption>
                    <GeneratorOption>
                        <OptionLabel>Mountainous — Marshy</OptionLabel>
                        <input type="range" min="0" max="1" step="0.1"
                                value={mountains}
                                onChange={(event) => this.setState({ mountains: parseFloat(event.target.value) })} />
                    </GeneratorOption>
                    <GeneratorOption>
                        <OptionLabel>Wooded — Plains</OptionLabel>
                        <input type="range" min="0" max="1" step="0.1"
                                value={woods}
                                onChange={(event) => this.setState({ woods: parseFloat(event.target.value) })} />
                    </GeneratorOption>
                </div>
            </div>
        );
    }
}

export default MapGenerator;
