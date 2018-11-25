import styled from 'styled-components';
import { inputReset } from '../styles/reset';

const Button = styled.button`
    ${inputReset}

    padding: 0.25em 0.75em;
    font-weight: 600;
    background: black;
    color: white;

    border-radius: 3px;
    cursor: pointer;

    outline: none;

    &: hover {
        background: red;
    }
`

export default Button;
