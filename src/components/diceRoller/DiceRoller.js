import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { roll } from 'droll';

import { inputReset } from '../styles/reset';

import RollerForm from './DiceRollerForm';
import RollerResult from './DiceRollerResult';

const RollerContainer = styled.div`
    position: relative;
`;

class DiceRoller extends Component {
    state = { show: false, result: null, query: '' }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.result && this.state.result) {
            setTimeout(() => this.setState({ result: null }), 3000);
        }
    }

    render() {
        const toggleShowRoller = (event) => (
            this.setState(({ show, ...state }) => ({ ...state, show: !show }))
        );

        const setQuery = (query) => this.setState({ query });

        const rollDice = (query) => {
            const rollQuery = query.length > 0 ? query : '1d20';
            const result = roll(rollQuery);

            if (result) {
                 this.setState({ result });
            }
        };

        return (
            <RollerContainer>
                {this.state.result ?
                    <RollerResult result={this.state.result} query={this.state.query || '1d20'} /> :
                    <RollerForm query={this.state.query} setQuery={setQuery} rollDice={rollDice} />
                }
            </RollerContainer>
        );
    }
}

export default DiceRoller;
