module.exports = {
    siteMetadata: {
        title: 'Losing Games',
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-styled-components',
        {
            resolve: "gatsby-transformer-remark",
                options: {
                    plugins: [
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
