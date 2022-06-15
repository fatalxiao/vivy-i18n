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

/**
 * Translate i18ns data by index
 */
export function translate(index: string): any;

/**
 * Translate i18ns data by index
 */
export function translate(index: string, restArgs: any): any;

/**
 * Create Vivy I18n plugin instance
 * @param options
 */
export default function VivyI18n(options?: VivyI18nPluginOption);
