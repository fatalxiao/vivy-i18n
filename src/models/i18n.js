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

            originData: {},

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

                const {defaultLanguage, originData} = state;
                const data = {};

                Object.entries(originData).forEach(([nameSpace, i18ns]) => {
                    data[nameSpace] = i18ns?.[language || defaultLanguage];
                });

                return {
                    ...state,
                    language: language || defaultLanguage,
                    data
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
                const originData = {...state.originData};
                const data = {...state.data};

                originData[nameSpace] = i18ns;
                data[nameSpace] = i18ns?.[language || defaultLanguage];

                return {
                    ...state,
                    originData,
                    data
                };

            },

            /**
             * Unregister I18ns
             * @param state {Object}
             * @param nameSpace {string}
             * @returns {Object}
             */
            unregister: (state, {nameSpace}) => {

                const originData = {...state.originData};
                const data = {...state.data};

                delete originData[nameSpace];
                delete data[nameSpace];

                return {
                    ...state,
                    originData,
                    data
                };

            }

        }
    };
}
