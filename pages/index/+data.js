export { data }
import matter from 'gray-matter'

const files = import.meta.glob('../blog/*/post.md', { eager: true, as: 'raw' })

function data() {
  const list = Object.entries(files).map(([path, content]) => {
    const slug = path.split('/').slice(-2, -1)[0]
    const { data: fm } = matter(content)
    return { slug, title: fm.title, date: fm.date }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
  return { posts: list }
}
