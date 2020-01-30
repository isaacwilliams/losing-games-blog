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
`

export const H2 = styled.h2`
    ${fontBroken}
    margin-bottom: 0.2rem;
    font-size: 1.65rem;
`

export const H3 = styled.h3`
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 0.1rem;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const ContentContainer = styled.div`
    margin: 2rem auto;
    padding: 0 2em;
    max-width: 60rem;
`

export const ResourceList = styled.ul`
    li {
        margin-left: 1em;
        list-style: disc;
    }

    a {
        color: black;

        &:hover {
            background: yellow;
        }
    }
`

export const ColumnContainer = styled.div`
    padding: 1em 0;
    display: flex;

    ${media.phone`
        flex-wrap: wrap;
    `}
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    flex-basis: calc(50% - 1rem);
    padding-right: 0.5rem;

    &.center-align {
        justify-content: center;
    }

    &:last-child {
        padding-right: 0;
        padding-left: 0.5rem;
    }

    ${media.phone`
        flex-basis: 100%;

        padding-right: 0;
        padding-left: 0 !important;
        padding-bottom: 0.5em;
    `}
`

export const Column3 = styled(Column)`
    flex-basis: calc(33.33% - 1rem);
`

export const BuySection = styled.div`
    margin-top: 3rem;
`

export const DownloadSection = styled(ColumnContainer)`
    font-size: 0.9em;

    h4 {
        margin-bottom: 0.5em;
        font-weight: 600;
    }

    p {
        margin-bottom: 0.5em;
    }

    .link {
        color: black;

        &:hover {
            background: yellow;
        }
    }
`;

export const DownloadButton = styled.a`
    display: inline-block;
    padding: 0.1em 0.8em 0.2em 0.8em;

    border-radius: 3px;

    text-decoration: none;
    font-weight: 600;

    background: black;
    color: white;

    &:hover {
        background: black;
        color: white;
    }
`;


export const BuyButton = styled.a`
    position: relative;
    display: block;

    padding: 1em 1em;

    border-radius: 3px;
    box-shadow: 0 2px 0 black;

    text-align: center;
    text-decoration: none;
    font-weight: 600;

    background: yellow;
    color: black;

    &:hover {
        top: -1px;
        box-shadow: 0 3px 0 black;
    }

    &:active {
        top: 1px;
        box-shadow: 0 1px 0 black;
    }
`

export const BuyButtonDescription = styled.span`
    display: block;
    font-size: 0.8em;
    font-weight: normal;
`
