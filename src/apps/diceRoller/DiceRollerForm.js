import React from 'react';
import styled from 'styled-components';
import { inputReset } from '../../components/styles/reset';
import * as colors from '../../components/styles/colors';

const RollerButton = styled.button`
    display: inline-block;
    position: relative;
    ${inputReset}
    outline: none;
    cursor: pointer;
    background: white;

    width: 1.5rem;
    height: 1.2rem;
    padding: 0;
    margin: 0;

    font-size: 0;

    &:before {
        top: -5px;
        left: 5px;
        position: absolute;
        font-size: 1.5rem;
        content: '⚄';
        cursor: pointer;
        pointer-events: none;
    }

    &:hover {
        color: ${colors.highlight};
    }
`

const Form = styled.form`
display: flex;
`

const Input = styled.input`
    ${inputReset}
    width: 4rem;
    font-size: 0.8rem;
    outline: none;
    margin-right: 0.5em;
    padding: 0.2em;
    text-align: right;
    border: 1px solid white;

    &:hover {
        border-color: lightgrey;
    }

    &:focus {
        border-color: black;
    }
`;


const RollerForm = ({ query, setQuery, rollDice, registerInput }) => (
    <Form onSubmit={(event) => {
        event.preventDefault();
        rollDice(query);
    }}>
        <Input type="text" placeholder="1d20" ref={registerInput} value={query} onChange={(event) => setQuery(event.target.value)} />
        <RollerButton>Roll</RollerButton>
    </Form>
);

export default RollerForm;
