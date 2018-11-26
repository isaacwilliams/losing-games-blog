import React from 'react';
import PageLayout from '../../../components/PageLayout';
import PortraitGenerator from '../../../components/portraitGenerator/PortraitGenerator';
import ToolPageTitle from '../../../components/page/ToolPageTitle';
import PageHeader from '../../../components/page/PageHeader';

export default () => (
    <PageLayout>
        <PageHeader>
            <ToolPageTitle>Portrait generator</ToolPageTitle>
        </PageHeader>
        <PortraitGenerator />
    </PageLayout>
);
