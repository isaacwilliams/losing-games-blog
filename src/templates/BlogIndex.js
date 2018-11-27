import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import * as colors from '../components/styles/colors';
import { fontDisplay } from '../components/styles/fonts';
import PageLayout from '../components/PageLayout';

import ListingTitle from '../components/listing/ListingItemTitle';
import ListingItem from '../components/listing/ListingItem';


const PostDate = styled.div`
    color: ${colors.bodyLight};
    font-size: 0.95rem;
`;

const BlogIndex = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <PageLayout isIndexPage>
            {posts.map(({ node: post }) => (
                <ListingItem key={post.id}>
                    <ListingTitle><Link to={post.fields.slug}>{post.frontmatter.title || post.fields.slug}</Link></ListingTitle>
                    <PostDate>{post.frontmatter.date}</PostDate>
                    {post.excerpt}
                </ListingItem>
            ))}
        </PageLayout>
    );
}

export default BlogIndex
