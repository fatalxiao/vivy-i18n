/**
 * @file types.ts
 * @author Liangxiaojun
 */

export type I18nProps = {
    index: string
}

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
