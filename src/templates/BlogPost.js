import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout'
import styled from 'styled-components';
import rehypeReact from 'rehype-react';

import PageTitle from '../components/page/PageTitle';
import PageHeader from '../components/page/PageHeader';
import RichContent from '../components/shared/RichContent';

import LazyPortraitGenerator from '../apps/portraitGenerator/LazyPortraitGenerator';

const PostContainer = styled.article`
`

const PostDate = styled.div`
    color: grey;
    text-align: center;
    margin-top: 1rem;
`;

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "portrait-generator": LazyPortraitGenerator }
}).Compiler

const Template = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <PageLayout>
            <PostContainer>
                <Helmet title={`Losing Games - ${post.frontmatter.title}`} />

                <article className="blog-post">
                    <PageHeader>
                        <PageTitle>{post.frontmatter.title}</PageTitle>
                        <PostDate>{post.frontmatter.date}</PostDate>
                    </PageHeader>

                    <RichContent>
                        {renderAst(post.htmlAst)}
                    </RichContent>
                </article>
            </PostContainer>
        </PageLayout>
    );
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`

export default Template;
