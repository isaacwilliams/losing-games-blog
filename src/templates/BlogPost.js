import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/layout/PageLayout';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import { get } from 'lodash/fp';

import TagLink from '../components/shared/TagLink';

import PageTitle from '../components/page/PageTitle';
import PageHeader from '../components/page/PageHeader';
import RichContent from '../components/shared/RichContent';
import BlogPostTagsList from '../components/page/BlogPostTagsList';

import LazyTableRoller from '../apps/tableRoller/LazyTableRoller';
import LazyPortraitGenerator from '../apps/portraitGenerator/LazyPortraitGenerator';

const getImageUrl = get(['frontmatter', 'image', 'childImageSharp', 'fluid', 'src']);

const PostDate = styled.div`
    color: grey;
    text-align: center;
    margin-top: 0.25rem;
`;

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        'portrait-generator': LazyPortraitGenerator,
        'table-roller': LazyTableRoller,
     }
}).Compiler;

const Template = ({ data }) => {
    const { markdownRemark: post } = data;

    const imageUrl = getImageUrl(post);

    const tags = post.frontmatter.tags || [];

    return (
        <PageLayout>
            <article>
                <Helmet title={`Losing Games - ${post.frontmatter.title}`} meta={[
                    { name: 'og:image', 'content': imageUrl },
                    { name: 'og:title', content: `Losing Games - ${post.frontmatter.title}` },
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:creator', content: '@isaacwilliams' },
                    { name: 'og:description', 'content': post.excerpt },
                    { name: 'description', 'content': post.excerpt },
                ]} />

                <PageHeader>
                    <PageTitle>{post.frontmatter.title}</PageTitle>
                    <PostDate>{post.frontmatter.date}</PostDate>
                </PageHeader>

                <RichContent>
                    {renderAst(post.htmlAst)}
                </RichContent>

                <BlogPostTagsList tags={tags} />
            </article>
        </PageLayout>
    );
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            excerpt
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                tags
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
