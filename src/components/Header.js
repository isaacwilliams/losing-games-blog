import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { fontDisplay } from './styles/fonts';

import ContentContainer from './ContentContainer';
import DiceRoller from './diceRoller/DiceRoller';

const HeaderContainer = styled.header`
    padding: 1rem 0;
`;

const animateBack = css`
    &:hover {
        &:before {
            transform: rotate(-90deg);
        }
    }
`

const animateNil = css``

const SiteTitle = styled.h1`
    position: relative;
    font-weight: 600;
    ${fontDisplay}

    &:before {
        position: absolute;
        left: -1.5rem;
        content: '✕';
        font-weight: 400;
        transform: rotate(0deg);
        transition: transform 0.25s ease-in-out;
    }

    ${({ isIndexPage }) => (
        isIndexPage ? null : animateBack
    )}
`;

const HeaderAlignment = styled.div`
    display: flex;
    justify-content: space-between;
`

const Header = ({ siteTitle, isIndexPage }) => {
    return (
        <HeaderContainer>
            <ContentContainer>
                <HeaderAlignment>
                    <SiteTitle isIndexPage={isIndexPage}>
                        <Link to="/">{siteTitle}</Link>
                    </SiteTitle>
                    <DiceRoller />
                </HeaderAlignment>
            </ContentContainer>
        </HeaderContainer>
    );
}

export default Header
