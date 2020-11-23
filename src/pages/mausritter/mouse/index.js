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
    MausritterHasMoved,
} from '../../../components/mausritter/components';

const MausritterIndex = (props) => (
    <PageLayout fullWidthContent>
        <Helmet title={`Losing Games — Mausritter character generator`}>
            <meta httpEquiv="refresh" content="0;url=https://mausritter.com/mouse" />
        </Helmet>

        <MausritterPageHeader>
            <MausritterPageTitle>Mausritter</MausritterPageTitle>
            <MausritterTagline>Instant mouse generator</MausritterTagline>
        </MausritterPageHeader>

        <MausritterHasMoved linkTo="https://mausritter.com/mouse" />

    </PageLayout>
);

export default MausritterIndex;
