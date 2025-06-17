import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import vike from 'vike/plugin'

export default {
  plugins: [vike(), mdx(), react()]
}
