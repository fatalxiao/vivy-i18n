/**
 * @file types.ts
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
