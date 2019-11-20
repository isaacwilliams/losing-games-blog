import React from 'react';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components';

import * as colors from '../../../components/styles/colors';
import { fontDisplay } from '../../../components/styles/fonts';

import PageLayout from '../../../components/layout/PageLayout';
import MausritterCharacter from '../../../apps/mausritterCharacter/MausritterCharacter';

import {
    MausritterPageHeader,
    MausritterPageTitle,
    MausritterTagline,
    ContentContainer,
} from '../../../components/mausritter/components';

const MausritterIndex = (props) => (
    <PageLayout fullWidthContent>
        <Helmet title={`Losing Games — Mausritter character generator`}>
            <link rel="stylesheet" href="https://use.typekit.net/jcg4vha.css" />
        </Helmet>

        <MausritterPageHeader>
            <MausritterPageTitle>Mausritter</MausritterPageTitle>
            <MausritterTagline>Instant mouse generator</MausritterTagline>
        </MausritterPageHeader>

        <ContentContainer>
            <MausritterCharacter />
        </ContentContainer>

    </PageLayout>
);

export default MausritterIndex;
