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
        actions: {

            translate: ({index}) => (dispatch, getState) => {

                if (!index) {
                    return null;
                }

                const state = getState();
                const {defaultLanguage, language, data} = state.i18n;

                // Parse index to nameSpace and key
                const [nameSpace, key] = index?.split('/') || [];

                // Get I18n config in data
                const i18ns = data[nameSpace];

                // Get current language message from I18n config
                const currentLanguageMessage = i18ns?.[language]?.[key];

                // Pass state to functional message
                if (typeof currentLanguageMessage === 'function') {
                    return currentLanguageMessage(state);
                }

                if (currentLanguageMessage) {
                    return currentLanguageMessage;
                }

                // Get default language message from I18n config
                const defaultLanguageMessage = i18ns?.[defaultLanguage]?.[key];

                // Pass state to functional message
                if (typeof defaultLanguageMessage === 'function') {
                    return defaultLanguageMessage(state);
                }

                if (defaultLanguageMessage) {
                    return defaultLanguageMessage;
                }

                return '';

            }

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
