import styled from 'styled-components';
import { inputReset } from '../styles/reset';
import * as colors from '../styles/colors';

const Button = styled.button`
    ${inputReset}

    padding: 0.25em 0.75em;
    font-weight: 600;
    background: ${colors.highlightAlt};
    color: white;

    border-radius: 3px;
    cursor: pointer;

    outline: none;

    &: hover {
        background: ${colors.highlight};
    }
`

export default Button;
