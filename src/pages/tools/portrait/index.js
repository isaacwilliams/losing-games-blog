import React from 'react';
import PageLayout from '../../../components/PageLayout';
import ToolPageTitle from '../../../components/page/ToolPageTitle';
import PageHeader from '../../../components/page/PageHeader';

import PortraitGenerator from '../../../apps/portraitGenerator/PortraitGenerator';

export default () => (
    <PageLayout>
        <PageHeader>
            <ToolPageTitle>Portrait generator</ToolPageTitle>
        </PageHeader>
        <PortraitGenerator />
    </PageLayout>
);