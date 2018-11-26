import React from 'react';
import PageLayout from '../../../components/PageLayout';
import ToolPageTitle from '../../../components/page/ToolPageTitle';
import PageHeader from '../../../components/page/PageHeader';

import GlaiveCharacter from '../../../apps/glaiveCharacter/GlaiveCharacter';

export default () => (
    <PageLayout>
        <PageHeader>
            <ToolPageTitle>Glaive character</ToolPageTitle>
        </PageHeader>
        <GlaiveCharacter />
    </PageLayout>
);
