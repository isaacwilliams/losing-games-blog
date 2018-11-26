import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import * as colors from '../components/styles/colors';
import { fontDisplay } from '../components/styles/fonts';

import PageLayout from '../components/PageLayout';

const Post = styled.div`
    padding-bottom: 1rem;
`;

const PostTitle = styled.h2`
    position: relative;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    ${fontDisplay}

    &:before {
        position: absolute;
        left: -1.5rem;
        top: 0.1rem;
        line-height: 1;
        content: '✳︎';

        transform: rotate(0deg);
        transition: transform 1s ease-out;
    }

    &:hover {
        &:before {
            transform: rotate(180deg);
        }
    }
`;

const PostDate = styled.div`
    color: ${colors.bodyLight};
    margin-bottom: 0.5rem;
`;

const BlogIndex = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <PageLayout isIndexPage>
            {posts.map(({ node: post }) => (
                <Post key={post.id}>
                    <PostTitle><Link to={post.fields.slug}>{post.frontmatter.title || post.fields.slug}</Link></PostTitle>
                    <PostDate>{post.frontmatter.date}</PostDate>
                    {post.excerpt}
                </Post>
            ))}
        </PageLayout>
    );
}

export default BlogIndex
