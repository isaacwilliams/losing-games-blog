import React from 'react';
import ToolPage from '../../templates/ToolPage';
import MapGenerator from '../../apps/mapGenerator/MapGenerator';

export const frontmatter = {
    title: 'Map generator',
    path: '/tools/map',
    date: '2018-11-25',
    description: 'Creates random fantasy maps',
}

export default () => (
    <ToolPage data={frontmatter}>
        <MapGenerator />
    </ToolPage>
);
