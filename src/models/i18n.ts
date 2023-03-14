/**
 * @file i18n.ts
 * @author Liangxiaojun
 */

// Utils
import {translate} from '../index';

// Types
import {VivyModel} from 'vivy';

/**
 * Create I18n model
 * @param nameSpace
 * @param language
 * @param defaultLanguage
 * @param onSwitchLanguage
 * @param onSwitchDefaultLanguage
 */
export default function createI18n(
    nameSpace?: string, language?: string, defaultLanguage?: string,
    onSwitchLanguage?: (language: string) => void, onSwitchDefaultLanguage?: (language: string) => void
): VivyModel<object> {
    return {
        nameSpace: nameSpace as string,
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
             */
            translate: ({index, ...restArgs}) => () => translate(index, restArgs)

        },
        reducers: {

            /**
             * Switch current language
             * @param state
             * @param language
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
             * @param state
             * @param nameSpace
             * @param i18ns
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
             * @param state
             * @param nameSpace
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
