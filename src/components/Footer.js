import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import * as colors from './styles/colors';

import ContentContainer from './ContentContainer';

const FooterContainer = styled.footer`
    padding: 5rem 0 3rem 0;
    font-size: 0.9rem;
    color: ${colors.bodyLight};

    a {
        color: ${colors.bodyLight};
    }
`;

const Footer = ({ siteTitle }) => (
    <FooterContainer>
        <ContentContainer>
            © {new Date().getFullYear()} Isaac Williams
            {' — '}
            <a href="http://isaacwilliams.net">Website</a>
            {' — '}
            <a href="https://twitter.com/isaacwilliams">Twitter</a>
        </ContentContainer>
    </FooterContainer>
);

export default Footer
