/**
 * @file i18n.js
 */

/**
 * Create I18n model
 * @param nameSpace {string}
 * @param defaultLanguage {string}
 * @returns {Object}
 */
export default function createI18n(nameSpace, defaultLanguage = 'en-US') {
    return {
        nameSpace: nameSpace || 'i18n',
        state: {

            /**
             * Default language
             */
            defaultLanguage,

            /**
             * Current language
             */
            language: defaultLanguage,

            /**
             * I18ns data in models
             */
            data: {}

        },
        reducers: {

            /**
             * Switch current language
             * @param state
             * @param language
             * @returns {*&{language: (string|*)}}
             */
            switchLanguage: (state, {language}) => {
                return {
                    ...state,
                    language: language
                };
            },

            /**
             * Register I18ns
             * @param state {Object}
             * @param nameSpace {string}
             * @param i18ns {Object}
             * @returns {Object}
             */
            register: (state, {nameSpace, i18ns}) => {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [nameSpace]: i18ns
                    }
                };
            },

            /**
             * Unregister I18ns
             * @param state {Object}
             * @param nameSpace {string}
             * @returns {Object}
             */
            unregister: (state, {nameSpace}) => {

                const data = {...state.data};
                delete data[nameSpace];

                return {
                    ...state,
                    data
                };

            }

        }
    };
}
