import styled from 'styled-components';
import { fontBody, fontDisplay } from '../styles/fonts';
import media from '../styles/media';

export default styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${fontDisplay}
    text-align: center;
    font-weight: 900;
    font-size: 2.1rem;

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

    ${media.phone`
        flex-direction: column;
        padding-bottom: 1rem;

        font-size: 2rem;

        &:before {
            margin-right: 0;
            margin-bottom: 0.5em;
        }

        &:after {
            margin-left: 0;
            margin-top: 0.5em;
        }
    `}
`
