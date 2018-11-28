import React, { Component } from 'react';
import styled from 'styled-components';

import createMapDef from './createMapDef';
import drawMap from './drawMap';

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
    state = {}

    componentDidMount() {
        this.draw();
    }

    draw() {
        const {} = this.state;

        const mapDef = createMapDef();
        drawMap(this.canvas, mapDef);
    }

    download() {
        const image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        this.downloadLink.setAttribute("href", image);
    }

    render() {
        const {} = this.state;

        return (
            <div>
                <canvas ref={(c) => { this.canvas = c; }} width="600" height="400" />

                <br /><br />
                <p>
                    <Button onClick={() => this.draw()}>New portrait</Button>
                    {' '}
                    <a ref={(c) => { this.downloadLink = c; }} download="portrait.png">
                        <Button onClick={() => this.download()}>Download</Button>
                    </a>
                </p>
            </div>
        );
    }
}

export default MapGenerator;
