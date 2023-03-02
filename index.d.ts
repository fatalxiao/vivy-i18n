import * as I18n from './dist/components/I18n';

/**
 * I18n
 */
export {I18n};

/**
 * Vivy I18n plugin option
 */
export interface VivyI18nPluginOption {

    /**
     * NameSpace of "i18n" Model
     */
    i18nModelNameSpace?: string,

    /**
     * Current language
     */
    language?: string,

    /**
     * Default language
     */
    defaultLanguage?: string,

    /**
     * Switch language callback
     */
    onSwitchLanguage?: (language?: string) => void,

    /**
     * Switch default language callback
     */
    onSwitchDefaultLanguage?: (defaultLanguage?: string) => void,

}

export interface VivyI18nModelState {
    language?: string,
    defaultLanguage?: string,
}

export interface translateAction {
    index?: string
}

export interface switchLanguageAction {
    language?: string
}

export interface switchDefaultLanguageAction {
    defaultLanguage?: string
}

export interface VivyI18nModelActions {
    translate?: (translateAction) => any,
    switchLanguage?: (switchLanguageAction) => any,
    switchDefaultLanguage?: (switchDefaultLanguageAction) => any
}

/**
 * Translate i18ns data by index
 */
export function translate(index: string): any;

/**
 * Translate i18ns data by index
 */
export function translate(index: string, restArgs: any): any;

/**
 * A hook to translate i18ns data by index
 */
export function useTranslate(index: string, restArgs: any): any;

/**
 * A hook to access the state, actions and reducers from i18n model
 */
export function useI18n(): [VivyI18nModelState, VivyI18nModelActions];

/**
 * Create Vivy I18n plugin instance
 * @param options
 */
export default function VivyI18n(options?: VivyI18nPluginOption);
