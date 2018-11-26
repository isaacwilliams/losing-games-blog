import React from 'react';
import BlogIndex from '../../templates/BlogIndex';

const IndexPage = (props) => <BlogIndex {...props} />;

export const pageQuery = graphql`
query GeneratorIndexQuery {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

export default IndexPage;
