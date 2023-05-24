import { projects } from "./utils/projectsData",
export default defineNuxtConfig({
    modules: ['@nuxt/content'],
    mode: "universal",
    generate: {
      async routes() {
        const paths = [];

        projects.forEach(project => {
          paths.push(`/project/${project.slug}`);
        });

        return paths;
      }
    }
    ssr: true, //server side rendered enabled //When true
    target: "static", // and static, nuxt generates a hybrid static site
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
  }),