/**
 * @file i18n.js
 */

// Utils
import {translate} from '../index';

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
             * @param restArgs
             * @returns {function(): *}
             */
            translate: ({index, ...restArgs}) => () => translate(index, restArgs)

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
