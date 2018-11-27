import React from 'react';
import ToolPage from '../../../templates/ToolPage';
import PortraitGenerator from '../../../apps/portraitGenerator/PortraitGenerator';

export const frontmatter = {
    title: 'Portrait generator',
    path: '/tools/portrait',
    date: '2018-11-25',
    description: 'Creates random character portraits',
}

export default () => (
    <ToolPage data={frontmatter}>
        <PortraitGenerator />
    </ToolPage>
);
