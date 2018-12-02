import React from 'react';
import BlogIndex from '../templates/BlogIndex';

export const pageQuery = graphql`
query IndexQuery {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: "true" } } }
    ) {
        edges {
            node {
                id
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                }
            }
        }
    }
}
`

export default BlogIndex;
