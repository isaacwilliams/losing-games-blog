import React from 'react';
import styled, { css } from 'styled-components';

import PageLayout from '../../components/layout/PageLayout';
import RichContent from '../../components/shared/RichContent';
import PageTitle from '../../components/page/PageTitle';
import PageHeader from '../../components/page/PageHeader';

import media from '../../components/styles/media';

export const fontBroken = css`
    font-family: ff-brokenscript-bc-web, Vollkorn, serif;
    font-weight: 700;
    letter-spacing: 0.03em;
`;

export const MausritterPageHeader = styled(PageHeader)`
    padding-top: 4rem;
    padding-bottom: 5rem;
    color: white;

    background: url(${require('./pencil-background.png')});
    background-size: 400px auto;

    ${media.phone`
        padding-top: 2rem;
        padding-bottom: 2.5rem;
    `}
`

export const MausritterPageTitle = styled(PageTitle)`
    ${fontBroken}

    font-size: 5rem;
    line-height: 1em;

    &:before,
    &:after {
        content: '';
    }

    ${media.phone`
        padding-bottom: 0;
        font-size: 3rem;
    `}
`

export const MausritterTagline = styled.p`
    ${fontBroken}

    font-size: 1.65rem;
    text-align: center;

    &:before,
    &:after {
        content: '';
    }

    ${media.phone`
        font-size: 1.4rem;
    `}
`;

export const ContentContainer = styled.div`
    margin: 4rem auto;
    padding: 0 2em;
    max-width: 60rem;
    text-align: center;
    font-size: 1.4rem;
`;

export const MausritterHasMoved = ({ linkTo = 'https://mausritter.com' }) => (
    <ContentContainer>
        This page has moved, and can now be found at <a href={linkTo}>mausritter.com</a>
    </ContentContainer>
);
