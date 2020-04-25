import React from 'react';
import ToolPage from '../../../templates/ToolPage';
import CardDraw from '../../../apps/cardDraw/CardDraw';

export const frontmatter = {
    title: 'Card draw',
    path: '/tools/card-draw',
    date: '2020-04-25',
    description: 'Draw from a deck of playing cards, with a seeded randomiser',
}

export default () => (
    <ToolPage data={frontmatter}>
        <CardDraw />
    </ToolPage>
);
