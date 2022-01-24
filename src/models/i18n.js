/**
 * @file i18n.js
 */

/**
 * Create I18n model
 * @param nameSpace {string}
 * @param language {string}
 * @param defaultLanguage {string}
 * @param onSwitchLanguage {Function}
 * @param onSwitchDefaultLanguage {Function}
 * @returns {Object}
 */
export default function createI18n(
    nameSpace, language = 'en-US', defaultLanguage = 'en-US',
    onSwitchLanguage, onSwitchDefaultLanguage
) {
    return {
        nameSpace: nameSpace || 'i18n',
        state: {

            /**
             * Current language
             */
            language,

            /**
             * Default language
             */
            defaultLanguage,

            /**
             * I18ns data in models
             */
            data: {}

        },
        actions: {

            /**
             * Translate index
             * @param index
             * @returns {(function(*, *): (string|*))|*}
             */
            translate: ({index}) => (dispatch, getState) => {

                if (!index) {
                    return '';
                }

                const state = getState();
                const {language, defaultLanguage, data} = state.i18n;

                // Parse index to nameSpace and key
                const [nameSpace, key] = index?.split('/') || [];

                // Get I18n config in data
                const i18ns = data[nameSpace];

                // Get current language message from I18n config
                const currentLanguageMessage = i18ns?.[language]?.[key];

                // Pass state to functional message
                if (typeof currentLanguageMessage === 'function') {
                    return currentLanguageMessage(getState);
                }

                if (currentLanguageMessage) {
                    return currentLanguageMessage;
                }

                // Get default language message from I18n config
                const defaultLanguageMessage = i18ns?.[defaultLanguage]?.[key];

                // Pass state to functional message
                if (typeof defaultLanguageMessage === 'function') {
                    return defaultLanguageMessage(getState);
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
                onSwitchLanguage?.(language);
                return {
                    ...state,
                    language
                };
            },

            /**
             * Switch default language
             * @param state
             * @param language
             * @returns {*&{language: (string|*)}}
             */
            switchDefaultLanguage: (state, {defaultLanguage}) => {
                onSwitchDefaultLanguage?.(defaultLanguage);
                return {
                    ...state,
                    defaultLanguage
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
