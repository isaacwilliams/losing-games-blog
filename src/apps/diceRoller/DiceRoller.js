import React, { Component } from 'react';
import styled from 'styled-components';
import { roll } from 'droll';
import media from '../../components/styles/media';

import RollerForm from './DiceRollerForm';
import RollerResult from './DiceRollerResult';

const RollerContainer = styled.div`
    position: relative;
    height: 1em;

    ${media.phone`display: none;`}
`;

class DiceRoller extends Component {
    state = { show: false, result: null, query: '' }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.result && this.state.result) {
            this.t = setTimeout(() => {
                this.setState({ result: null });
                this.input.focus();
            }, 3000);
        }
    }

    componentWillUnmount() {
        if (this.t) {
            clearTimeout(this.t);
        }
    }

    render() {
        const setQuery = (query) => this.setState({ query });

        const rollDice = (query) => {
            const rollQuery = query.length > 0 ? query : '1d20';
            const result = roll(rollQuery);

            if (result) {
                 this.setState({ result });
            }
        };

        const registerInput = (c) => { this.input = c; };

        return (
            <RollerContainer>
                {this.state.result ?
                    <RollerResult result={this.state.result} query={this.state.query || '1d20'} /> :
                    <RollerForm query={this.state.query}
                            setQuery={setQuery}
                            rollDice={rollDice}
                            registerInput={registerInput} />
                }
            </RollerContainer>
        );
    }
}

export default DiceRoller;
