import React from 'react';
import styled from 'styled-components';

const symbol = (array) => (index) => index < array.length - 1 ? ' + ' : ' = ';

const Result = styled.div`
padding: 0.2rem 0.4rem;
font-size: 0.8rem;
width: 100%;
`

const ResultQuery = styled.span`
color: grey;
`

const ResultTotal = styled.span`
font-weight: 600;
`

const RollerResult = ({ result, query }) => {
    const getSymb = symbol(result.rolls);

    return (
        <Result>
            <ResultQuery>{query}: </ResultQuery>
            {result.rolls.length > 1 ? result.rolls.map((roll, i) => `${roll} ${getSymb(i)}`) : ''}
            <ResultTotal>{result.total}</ResultTotal>
        </Result>
    );
};

export default RollerResult;
