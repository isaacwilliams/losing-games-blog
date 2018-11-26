import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import PageLayout from '../components/PageLayout';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Post = styled.div`
    padding-bottom: 1rem;
`;

const PostTitle = styled.h2`
    position: relative;
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    &:before {
        position: absolute;
        left: -1.5rem;
        top: 0.1rem;
        line-height: 1;
        content: '✳︎';
    }

    &:hover {
        &:before {
            animation: 1s ${spin} ease-out;
        }
    }
`;

const PostDate = styled.div`
    color: grey;
    margin-bottom: 0.5rem;
`;

const BlogIndex = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <PageLayout>
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
