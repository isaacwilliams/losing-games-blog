import React from 'react';
import ToolPage from '../../../templates/ToolPage';
import GlaiveCharacter from '../../../apps/glaiveCharacter/GlaiveCharacter';

export const frontmatter = {
    title: 'Glaive character',
    path: '/tools/glaive-character',
    date: '2018-11-20',
    description: 'Character auto-roller for my GLoG/Knave mashup',
}

export default () => (
    <ToolPage data={frontmatter}>
        <GlaiveCharacter />
    </ToolPage>
);
