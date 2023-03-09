/**
 * @file i18n.ts
 */

// Utils
import {translate} from '../index';

export interface TranslateParams {
    index: string;
}

export interface SwitchLanguageAction {
    language: string;
}

export interface SwitchDefaultLanguageAction {
    defaultLanguage: string;
}

export interface RegisterAction {
    nameSpace: string;
    i18ns: object;
}

export interface UnregisterAction {
    nameSpace: string;
}

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
) {
    return {
        nameSpace: nameSpace,
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
            translate: ({index, ...restArgs}: TranslateParams) => () => translate(index, restArgs)

        },
        reducers: {

            /**
             * Switch current language
             * @param state
             * @param language
             */
            switchLanguage: (state: any, {language}: SwitchLanguageAction) => {
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
            switchDefaultLanguage: (state: any, {defaultLanguage}: SwitchDefaultLanguageAction) => {
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
            register: (state: any, {nameSpace, i18ns}: RegisterAction) => {
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
            unregister: (state: any, {nameSpace}: UnregisterAction) => {

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
