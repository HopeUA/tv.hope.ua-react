import i18n from 'i18next';
import Backend from 'i18next-node-fs-sync-backend';

i18n
    .use(Backend)
    .init({
        whitelist: ['ru', 'uk'],
        fallbackLng: 'uk',
        preload: ['ru', 'uk'],

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        debug: false,
        initImmediate: false,

        interpolation: {
            escapeValue: false // not needed for react!!
        },

        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2
        },
        react: {
            wait: false
        }
    });

export default i18n;
