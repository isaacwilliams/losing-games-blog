import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import * as colors from '../../components/styles/colors';
import { fontDisplay } from '../../components/styles/fonts';
import PageLayout from '../../components/PageLayout';

import ListingTitle from '../../components/listing/ListingItemTitle';
import ListingItem from '../../components/listing/ListingItem';

const ToolListingTitle = styled(ListingTitle)`
    &:before {
        content: '✧';
    }
`

const BlogIndex = ({ data }) => {
    const tools = [
        {
            title: 'Portrait generator',
            slug: '/tools/portrait',
            description: 'Create random character portraits',
        }
    ];

    return (
        <PageLayout>
            {tools.map((tool, i) => (
                <ListingItem key={i}>
                    <ToolListingTitle><Link to={tool.slug}>{tool.title}</Link></ToolListingTitle>
                    {tool.description}
                </ListingItem>
            ))}
        </PageLayout>
    );
}

export default BlogIndex
