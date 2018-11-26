import React from 'react';
import PageLayout from '../../../components/PageLayout';
import ToolPageTitle from '../../../components/page/ToolPageTitle';
import PageHeader from '../../../components/page/PageHeader';

import GlaiveCharacter from '../../../apps/glaiveCharacter/GlaiveCharacter';

export const frontmatter = {
    title: 'Glaive character',
    path: '/tools/glaive-character',
    date: '2018-11-20',
    description: 'Character auto-roller for my GLoG/Knave mashup',
}

export default () => (
    <PageLayout>
        <PageHeader>
            <ToolPageTitle>Glaive character</ToolPageTitle>
        </PageHeader>
        <GlaiveCharacter />
    </PageLayout>
);
