import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../components/styles/media';

import { getSeed } from './util';

import createMapData from './createMapData';
import drawMap from './drawMap';
import fetchAssets from '../utils/fetchAssets';
import createSpriteSheet from '../utils/createSpriteSheet';

import Button from '../../components/shared/Button';

const Canvas = styled.canvas`
    width: 800px;
    height: 600px;

    ${media.phone`
        width: 320px;
        height: 240px;
    `}
`

const GeneratorButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const GeneratorOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 0;
`

const OptionLabelRight = styled.label`
    display: inline-block;
    width: 5rem;
`

const OptionLabelLeft = styled.label`
    display: inline-block;
    width: 5rem;
`

const OptionInput = styled.input`
    margin-left: 1rem;
    margin-right: 1rem;
`

const getCode = ({ seed, featureDensity, civilized, mountains, woods }) => (
    `${featureDensity}-${civilized}-${mountains}-${woods}-${seed}`
)

class MapGenerator extends Component {
    state = {
        loaded: false,
        spriteSheets: null,
        seed: getSeed(),
        featureDensity: 5,
        civilized: 5,
        mountains: 5,
        woods: 5,
        savedOptions: {
            featureDensity: 5,
            civilized: 5,
            mountains: 5,
            woods: 5,
        }
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
        const { seed, spriteSheets, featureDensity, civilized, mountains, woods } = this.state;


        const mapData = createMapData({
            seed,
            spriteSheets,
            width: this.canvas.width,
            height: this.canvas.height,
            options: {
                featureDensity: (featureDensity + 1) / 10,
                civilized: (civilized + 1) / 10,
                mountains: (mountains + 1) / 10,
                woods: (woods + 1) / 10,
            },
        });

        drawMap(this.canvas, mapData, spriteSheets);
    }

    newMap() {
        const { featureDensity, civilized, mountains, woods } = this.state;

        this.setState({
            seed: getSeed(),
            savedOptions: {
                featureDensity,
                civilized,
                mountains,
                woods,
            },
        });
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
            seed,
            savedOptions,
        } = this.state;

        if (!loaded) return <div>Loading...</div>;

        return (
            <div>
                <Canvas ref={(c) => { this.canvas = c; }} width="800" height="600" />

                <br /><br />
                <GeneratorButtons>
                    <div>
                        <Button onClick={() => this.newMap()}>New map</Button>
                        {' '}
                        <a ref={(c) => { this.downloadLink = c; }} download="portrait.png">
                            <Button onClick={() => this.download()}>Download</Button>
                        </a>
                    </div>
                    <div>
                        Seed: {getCode({ ...savedOptions, seed })}
                    </div>
                </GeneratorButtons>

                <div>
                    <GeneratorOption>
                        <OptionLabelLeft>Empty</OptionLabelLeft>
                        <OptionInput type="range" min="0" max="9"
                                value={featureDensity}
                                onChange={(event) => this.setState({ featureDensity: parseFloat(event.target.value) })} />
                        <OptionLabelRight>Populated</OptionLabelRight>
                    </GeneratorOption>
                    <GeneratorOption>
                        <OptionLabelLeft>Wild</OptionLabelLeft>
                        <OptionInput type="range" min="0" max="9"
                                value={civilized}
                                onChange={(event) => this.setState({ civilized: parseFloat(event.target.value) })} />
                        <OptionLabelRight>Civilized</OptionLabelRight>
                    </GeneratorOption>
                    <GeneratorOption>
                        <OptionLabelLeft>Marshy</OptionLabelLeft>
                        <OptionInput type="range" min="0" max="9"
                                value={mountains}
                                onChange={(event) => this.setState({ mountains: parseFloat(event.target.value) })} />
                        <OptionLabelRight>Mountainous</OptionLabelRight>
                    </GeneratorOption>
                    <GeneratorOption>
                        <OptionLabelLeft>Plains</OptionLabelLeft>
                        <OptionInput type="range" min="0" max="9"
                                value={woods}
                                onChange={(event) => this.setState({ woods: parseFloat(event.target.value) })} />
                        <OptionLabelRight>Woods</OptionLabelRight>
                    </GeneratorOption>
                </div>
            </div>
        );
    }
}

export default MapGenerator;
