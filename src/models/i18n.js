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
             * Current language
             */
            language: defaultLanguage,

            /**
             * Origin I18ns data in models
             */
            origin: {},

            /**
             * Current language I18ns data
             */
            current: {}

        },
        reducers: {

            /**
             * Switch current language
             * @param state
             * @param language
             * @returns {*&{language: (string|*)}}
             */
            switchLanguage: (state, {language}) => {

                const {origin} = state;
                const current = {};

                Object.entries(origin).forEach(([nameSpace, i18ns]) => {
                    current[nameSpace] = i18ns?.[language];
                });

                return {
                    ...state,
                    language: language,
                    current
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

                const {language} = state;
                const origin = {...state.origin};
                const current = {...state.current};

                origin[nameSpace] = i18ns;
                current[nameSpace] = i18ns?.[language];

                return {
                    ...state,
                    origin,
                    current
                };

            },

            /**
             * Unregister I18ns
             * @param state {Object}
             * @param nameSpace {string}
             * @returns {Object}
             */
            unregister: (state, {nameSpace}) => {

                const origin = {...state.origin};
                const current = {...state.current};

                delete origin[nameSpace];
                delete current[nameSpace];

                return {
                    ...state,
                    origin,
                    current
                };

            }

        }
    };
}
