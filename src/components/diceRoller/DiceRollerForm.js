import React from 'react';
import styled from 'styled-components';
import { inputReset } from '../styles/reset';

const RollerButton = styled.button`
    display: inline-block;
    position: relative;
    ${inputReset}
    outline: none;
    cursor: pointer;
    background: white;

    width: 1.5rem;
    height: 100%;
    padding: 0;
    margin: 0;

    z-index: 2;

    font-size: 0;

    &:before {
        top: -5px;
        left: 5px;
        position: absolute;
        font-size: 1.5rem;
        content: '⚃';
        cursor: pointer;
    }
`

const Form = styled.form`
display: flex;
`

const Input = styled.input`
    ${inputReset}
    border: 1px solid lightgrey;
    width: 4rem;
    font-size: 0.8rem;
    outline: none;
    margin-right: 0.5em;
    padding: 0.2em;
    text-align: right;

    &:focus {
        border-color: black;
    }
`;


const RollerForm = ({ query, setQuery, rollDice }) => (
    <Form onSubmit={(event) => {
        event.preventDefault();
        rollDice(query);
    }}>
        <Input type="text" placeholder="1d20" value={query} onChange={(event) => setQuery(event.target.value)} />
        <RollerButton>Roll</RollerButton>
    </Form>
);

export default RollerForm;
