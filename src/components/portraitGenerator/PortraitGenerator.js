import React, { Component } from 'react';
import styled from 'styled-components';

import drawPortrait from './drawPortrait';
import { colors } from './portraitConstants';

const Button = styled.button`
    padding: 0.25em 0.75em;
    font-family: 'Fira Mono', monospace;
    font-weight: 600;
    font-size: 1rem;
    background: black;
    color: white;

    border: none;
    border-radius: 3px;
    cursor: pointer;

    outline: none;

    &: hover {
        background: red;
    }
`

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

class Portrait extends Component {
    state = { skinVariance: 12, hairVariance: 24, clothingVariance: colors.length, accessories: true }

    componentDidMount() {
        this.draw();
    }

    draw() {
        const { skinVariance, hairVariance, clothingVariance, accessories } = this.state;

        drawPortrait(this.canvas, skinVariance, hairVariance, clothingVariance, accessories);
    }

    download() {
        const image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        this.downloadLink.setAttribute("href", image);
    }

    render() {
        const { skinVariance, hairVariance, clothingVariance, accessories } = this.state;

        return (
            <div>
                <canvas ref={(c) => { this.canvas = c; }} width="512" height="512" />

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
                </div>
            </div>
        );
    }
}

export default Portrait;
