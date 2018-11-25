import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ContentContainer from './ContentContainer';
import DiceRoller from './diceRoller/DiceRoller';

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

const HeaderAlignment = styled.div`
    display: flex;
    justify-content: space-between;
`

const Header = ({ siteTitle }) => (
    <HeaderContainer>
        <ContentContainer>
            <HeaderAlignment>
                <SiteTitle>
                    <Link to="/">{siteTitle}</Link>
                </SiteTitle>
                <DiceRoller />
            </HeaderAlignment>
        </ContentContainer>
    </HeaderContainer>
);

export default Header
