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
import PageTitle from '../components/page/PageTitle';
import PageHeader from '../components/page/PageHeader';

export const pageQuery = graphql`
query($tag: String) {
    allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: {
            published: { eq: "true" }
            tags: { in: [$tag] } }
        }
    ) {
        totalCount
        edges {
            node {
                id
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
            }
        }
    }
}
`

const PostTitle = styled(ListingTitle)`
    display: inline;
`;

const TagPageTitle = styled(PageTitle)`    
    &:before, &:after {
        content: '⨳ ⨳ ⨳';
    }
`

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

const TagCount = styled.div`
    color: grey;
    text-align: center;
    margin-top: 0.25rem;
`;

const BlogTags = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges;
    const tagCount = `${posts.length} ${posts.length === 1 ? 'post' : 'posts'}`;

    return (
        <PageLayout>
            <ListingContainer>
                <PageHeader>
                    <TagPageTitle>{capitalize(pageContext.tag)}</TagPageTitle>
                    <TagCount>{tagCount}</TagCount>
                </PageHeader>
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

export default BlogTags;
