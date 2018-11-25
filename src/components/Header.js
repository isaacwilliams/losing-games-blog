import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ContentContainer from './ContentContainer';

const HeaderContainer = styled.header`
    padding: 1rem 0;
`;

const SiteTitle = styled.h1`
    position: relative;
    font-weight: 600;

    &:before {
        position: absolute;
        left: -1.5rem;
        content: '✕';
        font-weight: 400;
    }
`;

const Header = ({ siteTitle }) => (
    <HeaderContainer>
        <ContentContainer>
            <SiteTitle>
                <Link to="/">{siteTitle}</Link>
            </SiteTitle>
        </ContentContainer>
    </HeaderContainer>
);

export default Header
