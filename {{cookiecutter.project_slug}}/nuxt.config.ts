import { NuxtConfig } from '@nuxt/types'
import * as mt from './utils/metatags'
import settings from './settings'

const config: NuxtConfig = {
  server: {
    port: settings.frontendPort,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brand new application',
    titleTemplate: '%s | {{ cookiecutter.app_title }}',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'apple-mobile-web-app-title',
        content: '{{ cookiecutter.app_title }}',
      },
      { name: 'application-name', content: '{{ cookiecutter.app_title }}' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
      ...mt.createMetaTags({
        title: '{{ cookiecutter.app_title }}',
        description: 'My brand new application',
      }),
    ],
    link: [
      mt.favicon('32x32'),
      mt.favicon('16x16'),
      mt.link('apple-touch-icon', '/img/icons/apple-touch-icon.png', {
        sizes: '180x180',
      }),
      mt.link('manifest', '/site.webmanifest'),
      mt.link('mask-icon', '/img/icons/safari-pinned-tab.svg', {
        color: '#2d839c',
      }),
      mt.link('shortcut icon', '/img/icons/favicon.ico'),
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vee-validate'],

  router: {},

  // Auto import components: https://go.nuxtjs.dev/config-components
  // If set to true then PyCharm has issues with resolving them
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far'],
          },
          // {
          //   set: "@fortawesome/free-brands-svg-icons",
          //   icons: ["fab"],
          // },
        ],
      },
    ],
  ],

  proxy: [`${settings.localBackendUrl}/v2`],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*',
      },
    },
  },
}

if (process.env.NODE_ENV !== 'production') {
  config.modules?.push('@nuxtjs/proxy')
}

export default config
