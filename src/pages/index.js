import React from 'react';
import { graphql } from 'gatsby';
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
                    date(formatString: "MMMM D, YYYY")
                    title
                }
            }
        }
    }
}
`

export default BlogIndex;
