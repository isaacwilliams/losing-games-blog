import styled from 'styled-components';
import { fontBody, fontDisplay } from '../styles/fonts';

const RichContent = styled.div`
    ${fontBody}

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
    }

    h2 {
        font-size: 1.6rem;
    }

    h3 {
        font-size: 1.3rem;
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

export default RichContent;