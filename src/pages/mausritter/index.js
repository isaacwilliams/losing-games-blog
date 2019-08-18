import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import * as colors from '../../components/styles/colors';
import { fontDisplay } from '../../components/styles/fonts';
import PageLayout from '../../components/layout/PageLayout';
import RichContent from '../../components/shared/RichContent';
import PageTitle from '../../components/page/PageTitle';
import PageHeader from '../../components/page/PageHeader';

const MausritterPageHeader = styled(PageHeader)`
    padding-top: 4rem;
    padding-bottom: 5rem;
    color: white;

    background: url(${require('./pencil-background.png')});
    background-size: 400px auto;
`

const MausritterPageTitle = styled(PageTitle)`
    font-family: ff-brokenscript-bc-web, serif;
    font-size: 5rem;
    line-height: 1em;
    letter-spacing: 0.03em;

    &:before,
    &:after {
        content: '';
    }
`

const MausritterTagline = styled.p`
    font-family: ff-brokenscript-bc-web, serif;
    font-size: 1.65rem;
    line-height: 1em;
    letter-spacing: 0.03em;
    text-align: center;

    &:before,
    &:after {
        content: '';
    }
`

const MausritterSubtitle = styled.h2`
    font-family: ff-brokenscript-bc-web, serif;
    font-size: 1.65rem;
    line-height: 1em;
    letter-spacing: 0.03em;
`

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const ContentContainer = styled.div`
    margin: 2rem auto;
    max-width: 60rem;
`

const ColumnContainer = styled.div`
    padding: 1em 0;
    display: flex;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;

    flex-basis: 48%;
    padding-right: 2%;

    &.center-align {
        justify-content: center;
    }

    &:last-child {
        padding-left: 2%;
        padding-right: 0;
    }
`

const MausritterButton = styled.a`
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

const MausritterButtonSubtitle = styled.span`
    display: block;
    font-size: 0.8em;
    font-weight: normal;
`

const MausritterIndex = (props) => (
    <PageLayout fullWidthContent>
        <Helmet title={`Losing Games - Tools`} />

        <link rel="stylesheet" href="https://use.typekit.net/jcg4vha.css" />

        <MausritterPageHeader>
            <MausritterPageTitle>Mausritter</MausritterPageTitle>

            <MausritterTagline>Sword-and-whiskers roleplaying</MausritterTagline>
        </MausritterPageHeader>

        <ContentContainer>
            <ColumnContainer>
                <Column className="center-align">
                    <Image src={require('./zine-preview.png')} />
                </Column>
                <Column>
                    <RichContent>
                        <p>
                            Take up the sword and don the whiskers of a brave mouse adventurer in <strong>Mausritter</strong>, a rules-light fantasy adventure roleplaying game.
                        </p>

                        <p>
                            Character creation is classless and very quick quick, designed to get you playing as soon as possible. Your mouse is defined by their abilty scores and the gear they carry. A slot and card-based inventory system makes managing your gear both easy and interesting.
                        </p>

                        <p>
                            Mausritter is built on the chasis of Into the Odd, with new rules for setting, character generation and mouse-scale adventures.
                        </p>

                        <p>
                            GMs are provided with procedures for running a mouse-scale sandbox, along with a beastiary and numerous tables for quickly creating adventures in the mouse kingdoms.
                        </p>

                        <p>
                            <em>
                                24 pages. Designed, written and illustrated by Isaac Williams.
                            </em>
                        </p>

                        <br/><br/>
                    </RichContent>

                    <MausritterSubtitle>
                        Get Mausritter
                    </MausritterSubtitle>

                    <ColumnContainer>
                        <Column>
                            <MausritterButton href="#">
                                Downloadable PDF

                                <MausritterButtonSubtitle>
                                    Pay what you want
                                    <br />
                                    at Itch.io
                                </MausritterButtonSubtitle>
                            </MausritterButton>
                        </Column>
                        <Column>
                            <MausritterButton href="#">
                                Print Zine

                                <MausritterButtonSubtitle>
                                    Incudes item & condition sheets.
                                    <br />
                                    $10 + S/H
                                </MausritterButtonSubtitle>
                            </MausritterButton>
                        </Column>
                    </ColumnContainer>
                </Column>
            </ColumnContainer>
        </ContentContainer>

        <ContentContainer>
            <ColumnContainer>
                <Column>
                    <MausritterSubtitle>Player Resources</MausritterSubtitle>
                </Column>

                <Column>
                    <MausritterSubtitle>GM Resources</MausritterSubtitle>
                </Column>
            </ColumnContainer>
        </ContentContainer>

    </PageLayout>
);

export default MausritterIndex;
