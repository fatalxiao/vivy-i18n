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

    /**
     * Current language
     */
    language?: string,

    /**
     * Default language
     */
    defaultLanguage?: string

}

export interface translateAction {

    /**
     * I18n index, format: 'model_name_space/i18n_key'
     */
    index?: string

}

export interface switchLanguageAction {

    /**
     * Target language
     */
    language?: string

}

export interface switchDefaultLanguageAction {

    /**
     * Target default language
     */
    defaultLanguage?: string

}

export interface VivyI18nModelActions {

    /**
     * Translate i18ns data by index
     */
    translate?: (translateAction) => any,

    /**
     * Switch current language
     */
    switchLanguage?: (switchLanguageAction) => any,

    /**
     * Switch default language
     */
    switchDefaultLanguage?: (switchDefaultLanguageAction) => any

}

/**
 * Translate i18ns data by index
 * @param index I18n index, format: 'model_name_space/i18n_key'
 */
export function translate(index: string): any;

/**
 * Translate i18ns data by index
 * @param index I18n index, format: 'model_name_space/i18n_key'
 * @param restArgs
 */
export function translate(index: string, restArgs: any): any;

/**
 * A hook to translate i18ns data by index
 * @param index I18n index, format: 'model_name_space/i18n_key'
 * @param restArgs
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
