import React from 'react';
import { Link } from 'gatsby';
import { capitalize } from 'lodash';
import styled from 'styled-components';
import * as colors from '../components/styles/colors';
import { fontDisplay } from '../components/styles/fonts';
import media from '../components/styles/media';

import PageLayout from '../components/layout/PageLayout';

import ListingTitle from '../components/listing/ListingItemTitle';
import ListingItem from '../components/listing/ListingItem';
import ListingContainer from '../components/listing/ListingContainer';

const PostTitle = styled(ListingTitle)`
    display: inline;
`;

export const PostDate = styled.div`
    display: inline;
    color: ${colors.bodyLight};
    font-size: 0.95rem;
    margin-left: 1em;

    ${media.phone`
        margin-left: 0;
        margin-bottom: 0.5em;
        display: block;
    `}
`;

const BlogIndex = ({ data, pageTitle }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <PageLayout isIndexPage>
            <ListingContainer>
                {posts.map(({ node: post }) => (
                    <ListingItem key={post.id}>
                        <div>
                            <PostTitle><Link to={post.fields.slug}>{post.frontmatter.title || post.fields.slug}</Link></PostTitle>
                            <PostDate>{post.frontmatter.date}</PostDate>
                        </div>
                        {post.excerpt}
                    </ListingItem>
                ))}
            </ListingContainer>
        </PageLayout>
    );
}

export default BlogIndex;
