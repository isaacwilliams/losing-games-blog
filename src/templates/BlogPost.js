import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout'
import styled from 'styled-components';

import PageTitle from '../components/page/PageTitle';
import PageHeader from '../components/page/PageHeader';

const PostContainer = styled.article`
`

const PostDate = styled.div`
    color: grey;
    text-align: center;
    margin-top: 1rem;
`;

const PostContent = styled.div`
    p {
        margin: 1rem 0;
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: 600;
    }

    h1, h2, h3, h4, h5 {
        margin: 1.5em 0 0.5em 0;
        font-weight: 600;
    }

    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1rem;
    }

    h3, h4, h5 {
        color: #666;
        font-weight: 600;
    }

    blockquote {
        position: relative;
        font-style: italic;
        margin-left: 2em;

        &: before {
            position: absolute;
            content: '>';
            left: -2em;
            color: #666;
        }
    }

    ul, ol {
        margin-left: 2em;
        counter-reset: li;

        li {
            margin: 0.3em 0;

            p {
                margin: 0;
            }

            position: relative;
            counter-increment: li;

            &:before {
                position: absolute;
                left: -2em;
                color: #666;
            }
        }
    }

    ul {
        li: before {
            content: '-';
        }
    }

    ol {
        li: before {
            content: counter(li) '.';
        }
    }

    table {
        width: 100%;
        box-sizing: content-box;
        border-spacing: 0.5em;
        font-size: 15px;
        word-break: keep-all;

        td, th {
            padding: 0.4em 0.5em;
        }

        th {
            border-bottom: 1px solid grey;
        }

        th {
            text-align: left;
            font-weight: 700;
        }

        tbody {
            tr: nth-child(odd) {
                background-color: #eee;
            }
        }

    }
`;

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

                    <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
                </article>
            </PostContainer>
        </PageLayout>
    );
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`

export default Template;
