/**
 * @file i18n.js
 */

/**
 * Create I18n model
 * @param options {Object}
 * @returns {Object}
 */
export default function createI18n({nameSpace, defaultLanguage}) {
    return {
        nameSpace: nameSpace || 'i18n',
        state: {

            defaultLanguage: defaultLanguage || 'en-US',

            language: 'en-US',

            origin: {},

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

                const {defaultLanguage, origin} = state;
                const current = {};

                Object.entries(origin).forEach(([nameSpace, i18ns]) => {
                    current[nameSpace] = i18ns?.[language || defaultLanguage];
                });

                return {
                    ...state,
                    language: language || defaultLanguage,
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

                const {defaultLanguage, language} = state;
                const origin = {...state.origin};
                const current = {...state.current};

                origin[nameSpace] = i18ns;
                current[nameSpace] = i18ns?.[language || defaultLanguage];

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
