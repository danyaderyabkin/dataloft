// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            title: 'Auto Nuxt',
        }
    },
    modules: ['@pinia/nuxt'],
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    runtimeConfig: {
        public: {
            api: 'https://am111.05.testing.place/api/v1/cars/list'
        }
    }
})