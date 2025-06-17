export { data }
import matter from 'gray-matter'
import { marked } from 'marked'

const files = import.meta.glob('../*/post.md', { eager: true, as: 'raw' })

function data({ routeParams }) {
  const slug = routeParams.slug
  const md = files[`../${slug}/post.md`]
  if (!md) throw new Error('Post not found: ' + slug)
  const { data: frontmatter, content } = matter(md)
  const html = marked.parse(content)
  return { html, frontmatter }
}
