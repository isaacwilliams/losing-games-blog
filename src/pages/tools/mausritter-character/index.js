import React from 'react';
import ToolPage from '../../../templates/ToolPage';
import MausritterCharacter from '../../../apps/mausritterCharacter/MausritterCharacter';

export const frontmatter = {
    title: 'Mausritter character',
    path: '/tools/mausritter-character',
    date: '2019-07-11',
    description: 'Character auto-roller for my mouse-scale RPG',
}

export default () => (
    <ToolPage data={frontmatter}>
        <MausritterCharacter />
    </ToolPage>
);
