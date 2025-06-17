export default function onBeforePrerenderStart() {
  const posts = import.meta.glob('../*/post.md', { as: 'raw', eager: true })
  return Object.keys(posts).map(p => {
    const slug = p.split('/').slice(-2, -1)[0]
    return { url: `/blog/${slug}` }
  })
}
