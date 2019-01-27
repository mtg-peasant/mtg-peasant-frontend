import VueI18n from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    fr: {
        message: {
            hello: 'bonjour monde'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

export default new VueI18n({
    locale: navigator.language, // set locale
    messages, // set locale messages,
    fallbackLocale: 'en',
})