import React from 'react';
import PageLayout from '../../../components/PageLayout';
import ToolPageTitle from '../../../components/page/ToolPageTitle';
import PageHeader from '../../../components/page/PageHeader';

import PortraitGenerator from '../../../apps/portraitGenerator/PortraitGenerator';

export const frontmatter = {
    title: 'Portrait Generator',
    path: '/tools/portrait',
    date: '2018-11-25',
    description: 'Create random character portraits',
}

export default () => (
    <PageLayout>
        <PageHeader>
            <ToolPageTitle>Portrait generator</ToolPageTitle>
        </PageHeader>
        <PortraitGenerator />
    </PageLayout>
);
