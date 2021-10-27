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

            // language: 'en-US',
            language: 'zh-CN',

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
                    language: language || state.defaultLanguage
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

                const nextData = state.data;
                const {language, defaultLanguage} = state;

                Object.defineProperty(nextData, nameSpace, {
                    get() {
                        return i18ns?.[language || defaultLanguage];
                    }
                });

                return {
                    ...state,
                    data: nextData
                };

            },

            /**
             * Unregister I18ns
             * @param state {Object}
             * @param nameSpace {string}
             * @returns {Object}
             */
            unregister: (state, {nameSpace}) => {

                const nextData = state.data;
                delete nextData[nameSpace];

                return {
                    ...state,
                    data: nextData
                };

            }

        }
    };
}
