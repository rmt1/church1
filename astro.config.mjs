import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: { '/about/': '/why/', '/before-you-buy/': '/how-repair-costs-are-estimated/' },
});
