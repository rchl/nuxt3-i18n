import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n'
    ],
    i18n: {
        locales: ['en', 'fr'],
        vueI18n: {
            messages: {
                en: {
                    test: 'ENG'
                }
            }
        }
    }
})
