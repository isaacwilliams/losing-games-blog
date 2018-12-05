/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');
const { get, uniq, kebabCase } = require('lodash/fp');

const getTags = get('node.frontmatter.tags');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);
    const tagTemplate = path.resolve("src/templates/BlogTags.js")

    const { data, errors } = await graphql(`
    {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            limit: 1000
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        tags
                        published
                    }
                }
            }
        }
    }
    `);

    if (errors) throw errors;

    const posts = data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
            },
        })
    })

    // Tag pages
    const tags = uniq(
        posts
            .filter(({ node }) => node.frontmatter.published === "true")
            .flatMap(({ node }) => node.frontmatter.tags)
    ).filter(tag => !!tag);

    tags.forEach(tag => {
        createPage({
            path: `/tags/${kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
                tag,
            },
        });
    })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
}
