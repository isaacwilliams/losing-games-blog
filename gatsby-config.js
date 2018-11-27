 module.exports = {
    siteMetadata: {
        title: 'Losing Games',
        author: 'Isaac Williams',
        description: 'Losing at D&D & other games',
        siteUrl: 'https://losing.games',
    },
    pathPrefix: '/',
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
        'gatsby-plugin-feed',
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
                            },
                        },
                    ],
                },
        },
    ],
}
