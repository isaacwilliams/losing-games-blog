import styled, { css } from 'styled-components';
import { fontDisplay } from '../../components/styles/fonts';

export const fontHandwriting = css`
    font-family: 'Rock Salt', cursive;
`;

export const FontImport = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');
`

export const Attr = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 10px;
    margin-bottom: 5px;

    border: 1px solid black;
    border-radius: 3px;

    font-size: 1.8rem;
`

export const AttrName = styled.div`
    position: relative;
    top: 2px;

    ${fontDisplay}
    font-weight: 900;
`

export const AttrVal = styled.div`
    width: 20%;
    ${fontHandwriting}
`
