import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import BlogIndex from './BlogIndex';


export const pageQuery = graphql`
query($tag: String) {
    allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: {
            published: { eq: "true" }
            tags: { in: [$tag] } }
        }
    ) {
        totalCount
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

export default (props) => {
    const count = props.data.allMarkdownRemark.totalCount;
    const posts = count === 1 ? 'post' : 'posts';
    const pageTitle = `${props.pageContext.tag} (${count} ${posts})`

    return <BlogIndex {...props} pageTitle={pageTitle} />;
};
