import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/layout/PageLayout';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import { get } from 'lodash/fp';

import PageTitle from '../components/page/PageTitle';
import PageHeader from '../components/page/PageHeader';
import RichContent from '../components/shared/RichContent';

import LazyPortraitGenerator from '../apps/portraitGenerator/LazyPortraitGenerator';

const getImageUrl = get(['frontmatter', 'image', 'childImageSharp', 'fluid', 'src']);

const PostContainer = styled.article`
`

const PostDate = styled.div`
    color: grey;
    text-align: center;
    margin-top: 0.25rem;
`;

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "portrait-generator": LazyPortraitGenerator }
}).Compiler;

const Template = ({ data }) => {
    const { markdownRemark: post } = data;

    const imageUrl = getImageUrl(post);

    return (
        <PageLayout>
            <PostContainer>
                <Helmet title={`Losing Games - ${post.frontmatter.title}`} meta={[{ name: 'og:image', 'content': imageUrl }]} />

                <PageHeader>
                    <PageTitle>{post.frontmatter.title}</PageTitle>
                    <PostDate>{post.frontmatter.date}</PostDate>
                </PageHeader>

                <RichContent>
                    {renderAst(post.htmlAst)}
                </RichContent>
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
                image {
                    childImageSharp {
                        fluid(maxWidth: 800, srcSetBreakpoints: [800]) {
                            src
                        }
                    }
                }
            }
        }
    }
`

export default Template;
