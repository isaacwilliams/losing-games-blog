import React from 'react';
import ToolPage from '../../../templates/ToolPage';
import MausritterCharacter from '../../../apps/mausritterCharacter/MausritterCharacter';

export const frontmatter = {
    title: 'Mausritter character',
    path: '/tools/mausritter-character',
    date: '2019-07-11',
    description: 'Character auto-roller mouse adventurers',
}

export default () => (
    <ToolPage data={frontmatter}>
        <MausritterCharacter />
    </ToolPage>
);
