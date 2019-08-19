import React from 'react';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components';

import * as colors from '../../components/styles/colors';
import { fontDisplay } from '../../components/styles/fonts';

import PageLayout from '../../components/layout/PageLayout';
import RichContent from '../../components/shared/RichContent';
import PageTitle from '../../components/page/PageTitle';
import PageHeader from '../../components/page/PageHeader';
import MausritterCharacter from '../../apps/mausritterCharacter/MausritterCharacter';

import {
    MausritterPageHeader,
    MausritterPageTitle,
    MausritterTagline,
    H2,
    H3,
    Image,
    ContentContainer,
    ResourceList,
    ColumnContainer,
    Column,
    Column3,
    BuySection,
    DownloadSection,
    DownloadButton,
    BuyButton,
    BuyButtonDescription,
} from './components';

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
                                24 pages. Written and illustrated by Isaac Williams.
                            </em>
                        </p>
                    </RichContent>

                    <BuySection>
                        <H2>
                            Get Mausritter
                        </H2>

                        <ColumnContainer>
                            <Column>
                                <BuyButton href="#">
                                    Downloadable PDF

                                    <BuyButtonDescription>
                                        Pay what you want
                                        <br />
                                        at Itch.io
                                    </BuyButtonDescription>
                                </BuyButton>
                            </Column>
                            <Column>
                                <BuyButton href="#">
                                    Print Zine

                                    <BuyButtonDescription>
                                        Incudes item & condition sheets.
                                        <br />
                                        $10 + Postage
                                    </BuyButtonDescription>
                                </BuyButton>
                            </Column>
                        </ColumnContainer>
                    </BuySection>
                </Column>
            </ColumnContainer>
        </ContentContainer>

        <ContentContainer>
            <ColumnContainer>
                <Column3>
                    <H2>Instant mouse</H2>

                    <RichContent>
                        <p>
                            Get playing right away with the instant mouse generator.
                        </p>
                        <p>
                            <DownloadButton href="/mausritter/mouse">Create a mouse</DownloadButton>
                        </p>
                    </RichContent>

                    <Image src={require('./torchmouse.png')} style={{ width: '90%' }} />

                </Column3>

                <Column3>
                    <H2>Downloads</H2>

                    <DownloadSection>
                        <Column>
                            <Image src={require('./sheets-player.png')} />
                        </Column>
                        <Column>
                            <h4>Player pack</h4>

                            <p>
                                Character, hireling, and player's reference sheet.
                            </p>

                            <p>
                                <DownloadButton href="#">Download</DownloadButton>
                            </p>
                        </Column>
                    </DownloadSection>

                    <DownloadSection>
                        <Column>
                            <Image src={require('./sheets-gm.png')} />
                        </Column>
                        <Column>
                            <h4>Gamemaster pack</h4>

                            <p>
                                Session tracking, reference sheet.
                            </p>

                            <p>
                                <DownloadButton href="#">Download</DownloadButton>
                            </p>
                        </Column>
                    </DownloadSection>

                    <DownloadSection>
                        <Column>
                            <Image src={require('./sheets-items.png')} />
                        </Column>
                        <Column>
                            <h4>Item cards</h4>

                            <p>
                                Cards for weapons, gear and conditions.
                            </p>

                            <p>
                                <DownloadButton href="#">Download</DownloadButton>
                            </p>
                        </Column>
                    </DownloadSection>
                </Column3>

                <Column3>
                    <H2>GM Resources</H2>

                    <H3>
                        Sandbox content generators
                    </H3>

                    <ResourceList>
                        <li><a href="../2019-07-24-mausritter-locations">Locations</a></li>
                        <li><a href="../2019-07-30-mausritter-settlements">Settlements</a></li>
                        <li><a href="../2019-08-05-mausritter-adventure-sites">Adventure sites</a></li>
                        <li><a href="../2019-07-16-mausritter-adventures">Adventure hooks</a></li>
                    </ResourceList>
                </Column3>
            </ColumnContainer>
        </ContentContainer>

    </PageLayout>
);

export default MausritterIndex;