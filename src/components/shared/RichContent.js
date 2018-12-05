import styled from 'styled-components';
import { fontBody, fontDisplay } from '../styles/fonts';

const RichContent = styled.div`
    ${fontBody}
    font-size: 1rem;
    line-height: 1.5;

    p {
        margin: 0.5em 0 0.8em 0;
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: 600;
    }

    h1, h2, h3, h4, h5 {
        ${fontDisplay}
        margin: 1.5em 0 0.3em 0;
        font-weight: 600;
    }

    h1 {
        font-size: 1.8rem;
        text-align: center;
    }

    h2 {
        font-size: 1.4rem;
    }

    h3 {
        font-size: 1.2rem;
        color: #444;
    }

    a {
        .gatsby-resp-image-wrapper {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            transition: box-shadow 0.2s ease-in-out;

            &: hover {
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
            }
        }
    }

    .gatsby-resp-image-figcaption {
        padding: 0.3rem 0.5rem;
        text-align: center;
        font-size: 0.9rem;
        color: grey;
        border: 1px solid lightgrey;
        border-top: 0;

        a {
            color: grey;
        }
    }

    .image-container {
        position: relative;

        &.right {
            float: right;
            width: 50%;
            margin-top: 0;
            margin-right: -5rem;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
            z-index: 100;
        }
    }

    aside.image {
        margin: 0 1rem;
        width: 50%;
        float: right;
    }

    blockquote {
        ${fontDisplay}
        font-weight: 400;

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
            content: '•';
        }
    }

    ol {
        li: before {
            content: counter(li) '.';
        }
    }

    table {
        width: 100%;
        margin: 1em 0;
        box-sizing: content-box;
        border-spacing: 0.5em;
        font-size: 0.9rem;
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

export default RichContent;
