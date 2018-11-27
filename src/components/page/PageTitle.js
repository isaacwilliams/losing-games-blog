import styled from 'styled-components';
import { fontBody, fontDisplay } from '../styles/fonts';

export default styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${fontDisplay}
    text-align: center;
    font-weight: 600;
    font-size: 2.5rem;

    &:before,
    &:after {
        ${fontBody}

        position: relative;
        display: inline-block;
        font-size: 1rem;

        content: '✳︎ ✳︎ ✳︎';
        font-weight: 400;

        white-space: nowrap;
    }

    &:before {
        margin-right: 1em;
    }

    &:after {
        margin-left: 1em;
    }

    @media (max-width: 42rem) {
        flex-direction: column;

        &:before {
            margin-right: 0;
            margin-bottom: 1em;
        }

        &:after {
            margin-left: 0;
            margin-top: 1em;
        }
    }
`
