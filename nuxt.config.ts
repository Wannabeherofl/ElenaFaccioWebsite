export default defineNuxtConfig({
    modules: ['@nuxt/content'],
    generate:{
      nojekyll: true, //not working on this version
      fallback: '404.html',
    },
    ssr: false, //When false
    target: "static", // and static, nuxt generates a SPA
    app: {
      head: {
        link: [
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=PT+Serif:wght@400;700&display=swap' }
        ]
      },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })