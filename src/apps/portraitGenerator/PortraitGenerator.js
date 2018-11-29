import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../components/styles/media';

import drawPortrait from './drawPortrait';
import { colors } from './portraitConstants';

import Button from '../../components/shared/Button';

const Canvas = styled.canvas`
    width: 512px;
    height: 512px;

    ${media.phone`
        width: 300px;
        height: 300px;
    `}
`

const GeneratorOption = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 0.5rem 0;

    ${media.phone`
        font-size: 0.9rem;
    `}
`

const OptionLabel = styled.label`
    display: inline-block;
    width: 16rem;
`

class Portrait extends Component {
    state = { skinVariance: 12, hairVariance: 24, clothingVariance: colors.length, fillStyle: "colors" }

    componentDidMount() {
        this.draw();
    }

    draw() {
        const { skinVariance, hairVariance, clothingVariance, fillStyle } = this.state;

        drawPortrait(this.canvas, skinVariance, hairVariance, clothingVariance, fillStyle);
    }

    download() {
        const image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        this.downloadLink.setAttribute("href", image);
    }

    render() {
        const { skinVariance, hairVariance, clothingVariance, fillStyle } = this.state;

        return (
            <div>
                <Canvas ref={(c) => { this.canvas = c; }} width="512" height="512" />

                <br /><br />
                <p>
                    <Button onClick={() => this.draw()}>New portrait</Button>
                    {' '}
                    <a ref={(c) => { this.downloadLink = c; }} download="portrait.png">
                        <Button onClick={() => this.download()}>Download</Button>
                    </a>
                </p>

                <div>
                    <GeneratorOption>
                        <OptionLabel>Fill style</OptionLabel>
                        <select checked={colors} value={fillStyle} onChange={(event) => this.setState({ fillStyle: event.target.value })}>
                            <option value="colors">Colors</option>
                            <option value="greyscale">Greyscale</option>
                            <option value="lineart">Lineart</option>
                        </select>
                    </GeneratorOption>
                    {fillStyle == "colors" && (
                        <>
                            <GeneratorOption>
                                <OptionLabel>Skin color variance</OptionLabel>
                                <input type="range" min="6" max={colors.length} step="6"
                                        value={skinVariance}
                                        onChange={(event) => this.setState({ skinVariance: parseInt(event.target.value) })} />
                            </GeneratorOption>
                            <GeneratorOption>
                                <OptionLabel>Hair color variance</OptionLabel>
                                <input type="range" min="6" max={colors.length} step="6"
                                        value={hairVariance}
                                        onChange={(event) => this.setState({ hairVariance: parseInt(event.target.value) })} />
                            </GeneratorOption>
                            <GeneratorOption>
                                <OptionLabel>Clothing color variance</OptionLabel>
                                <input type="range" min="6" max={colors.length} step="6"
                                        value={clothingVariance}
                                        onChange={(event) => this.setState({ clothingVariance: parseInt(event.target.value) })} />
                            </GeneratorOption>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default Portrait;
