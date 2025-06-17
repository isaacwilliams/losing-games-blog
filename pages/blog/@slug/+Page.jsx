export default Page

import React from 'react'
import { useData } from '../../../renderer/useData'

function Page() {
  const { html, frontmatter } = useData()
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
