import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer'

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  // globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/stencil-hn',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
}
