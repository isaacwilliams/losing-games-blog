const serializeFeed = ({ query: { site, allMarkdownRemark } }) => (
    allMarkdownRemark.edges.map(({ node }) => {
        const postUrl = site.siteMetadata.siteUrl + node.fields.slug;

        return {
            ...node.frontmatter,
            description: `${node.excerpt} <br /><br /> <a href="${postUrl}">Read full article...</a>`,
            url: postUrl,
            guid: postUrl,
        };
    })
);

 module.exports = {
    siteMetadata: {
        title: 'Losing Games',
        author: 'Isaac Williams',
        description: 'Losing at D&D & other games',
        siteUrl: 'https://losing.games',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        'gatsby-transformer-javascript-frontmatter',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-437587-15'
            }
        },
        {
            resolve: 'gatsby-plugin-feed',
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }
                `,
                feeds: [{
                    serialize: serializeFeed,
                    query: `
                    {
                        allMarkdownRemark(
                            sort: { fields: [frontmatter___date], order: DESC }
                            filter: { frontmatter: { published: { eq: "true" } } }
                        ) {
                            edges {
                                node {
                                    id
                                    excerpt(pruneLength: 400)
                                    html
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        date
                                        title
                                    }
                                }
                            }
                        }
                    }
                    `,
                    output: '/feed.xml',
                    title: 'Losing Games RSS Feed',
                }],
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    'gatsby-remark-component',
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 656,
                            linkImagesToOriginal: false,
                            showCaptions: true
                        },
                    },
                ],
            },
        },
    ],
}
