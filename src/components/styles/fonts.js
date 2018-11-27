import { css } from 'styled-components';

export const fontImport = css`
    @import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Vollkorn:400i,700,900');
`;

export const fontBody = css`
    font-family: 'Lato', sans-serif;
`;

export const fontDisplay = css`
    font-family: 'Vollkorn', serif;
    font-weight: 700;
`;

export const inputReset = css`
    ${fontBody}
    font-size: 1rem;
    border: none;
`
