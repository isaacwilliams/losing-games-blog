import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import * as colors from '../styles/colors';
import { fontBody, fontDisplay } from '../styles/fonts';
import media from '../styles/media';

import ContentContainer from './ContentContainer';
import DiceRoller from '../../apps/diceRoller/DiceRoller';

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
    font-size: 1.1rem;

    &:before {
        ${fontBody}

        position: absolute;
        left: -1.5rem;
        top: -0.1rem;
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
    ${media.phone`margin-right: -2rem;`}
`

const HeaderNav = styled.nav`
    display: flex;

    ul {
        display: flex;
        align-items: center;

        li {
            margin-right: 1em;
            margin-left: 1em;
            font-size: 0.8rem;
        }
    }
`

const NavLink = styled(Link)`
    position: relative;

    &:before {
        position: absolute;
        left: -1em;
        content: '✧';
        text-decoration: none;
        color: black;
    }
`;

const NavLinkExternal = styled.a`
    position: relative;

    &:before {
        position: absolute;
        left: -1em;
        content: '✧';
        text-decoration: none;
        color: black;
    }
`;

const Header = ({ siteTitle, isIndexPage }) => {
    return (
        <HeaderContainer>
            <ContentContainer>
                <HeaderAlignment>
                    <SiteTitle isIndexPage={isIndexPage}>
                        <Link to="/">{siteTitle}</Link>
                    </SiteTitle>
                    <HeaderNav>
                        <ul>
                            <li>
                                <NavLink to="/tools">Tools</NavLink>
                            </li>
                            <li>
                                <NavLinkExternal href="https://mausritter.com">Mausritter</NavLinkExternal>
                            </li>
                        </ul>
                        <DiceRoller />
                    </HeaderNav>
                </HeaderAlignment>
            </ContentContainer>
        </HeaderContainer>
    );
}

export default Header
