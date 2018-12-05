import React from 'react';
import { graphql } from 'gatsby';
import BlogTagsIndex from '../templates/BlogTagsIndex';

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 2000
          filter: { frontmatter: { published: { eq: "true" } } }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
export default BlogTagsIndex;
