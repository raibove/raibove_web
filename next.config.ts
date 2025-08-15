import createMDX from '@next/mdx'
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }
 
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)