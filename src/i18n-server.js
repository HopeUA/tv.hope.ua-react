import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';

i18n
    .use(Backend)
    .init({
        whitelist: ['ru', 'uk'],
        fallbackLng: 'uk',

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        debug: true,

        interpolation: {
            escapeValue: false // not needed for react!!
        },

        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2
        }
    });

export default i18n;
