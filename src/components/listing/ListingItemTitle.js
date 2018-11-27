import styled from 'styled-components';
import { fontBody, fontDisplay } from '../styles/fonts';

const ListingTitle = styled.h2`
    position: relative;
    ${fontDisplay}
    font-size: 1.5rem;

    &:before {
        ${fontBody}

        position: absolute;
        left: -1.5rem;
        line-height: 1;
        content: '✳︎';
        font-weight: 400;

        transform: rotate(0deg);
        transition: transform 1s ease-out;
    }

    &:hover {
        &:before {
            transform: rotate(180deg);
        }
    }
`;

export default ListingTitle;
