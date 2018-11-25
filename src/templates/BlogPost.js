import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout'
import styled, { keyframes } from 'styled-components';

class InlineCodeExecutor extends React.Component {
    componentDidMount() {
        if (!document) return;

        const inlineScripts = document.querySelectorAll('script[data-inline-script="true"]');

        inlineScripts.forEach(script => {
            eval(script.innerText);
        });
    }

    render() {
        return null;
    }
}

const PostContainer = styled.article`
`

const PostHeader = styled.header`
    padding: 2rem 0;
`

const PostTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    text-align: center;
    font-weight: 600;
    font-size: 2rem;

    &:before,
    &:after {
        position: relative;
        display: inline-block;
        font-size: 1rem;

        content: '✳︎ ✳︎ ✳︎';
        font-weight: 400;

        white-space: nowrap;
    }

    &:before {
        margin-right: 1em;
    }

    &:after {
        margin-left: 1em;
    }

    @media (max-width: 42rem) {
        flex-direction: column;

        &:before {
            margin-right: 0;
            margin-bottom: 1em;
        }

        &:after {
            margin-left: 0;
            margin-top: 1em;
        }
    }
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
            p {
                margin: 0;
            }

            position: relative;
            counter-increment: li;

            &:before {
                position: absolute;
                content: counter(li);
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
            content: counter(li);
        }
    }

    table {
        td, th {
            padding: 0.1 0.2em;
        }

        thead {
            border-bottom: 1px solid grey;
        }

        th {
            text-align: left;
            font-weight: 700;
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
                    <PostHeader>
                        <PostTitle>{post.frontmatter.title}</PostTitle>
                        <PostDate>{post.frontmatter.date}</PostDate>
                    </PostHeader>

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
