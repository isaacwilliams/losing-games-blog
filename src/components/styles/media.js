import { css } from 'styled-components';

const sizes = {
    desktop: 992,
    phone: 672,
}

export default {
    phone: (...args) => css`
        @media (max-width: ${sizes.phone / 16}rem) {
            ${css(...args)}
        }
    `,
    desktop: (...args) => css`
        @media (min-width: ${sizes.desktop / 16}rem) {
            ${css(...args)}
        }
    `
};
