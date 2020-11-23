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
    ContentContainer,
    MausritterHasMoved,
} from '../../components/mausritter/components';

const Center = styled.div`
    text-align: center;
`;

const MausritterIndex = (props) => (
    <PageLayout fullWidthContent>
        <Helmet title={`Losing Games — Mausritter`}>
            <meta httpEquiv="refresh" content="0;url=https://mausritter.com" />
        </Helmet>

        <MausritterPageHeader>
            <MausritterPageTitle>Mausritter</MausritterPageTitle>
            <MausritterTagline>Sword-and-whiskers roleplaying</MausritterTagline>
        </MausritterPageHeader>

        <MausritterHasMoved />

    </PageLayout>
);

export default MausritterIndex;
