/**
 * @file types.ts
 * @author Liangxiaojun
 */

import {VivyModel, Dispatch} from 'vivy';

export type I18nProps = {
    index: string
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

export interface VivyModelI18n {
    [key: string]: ((getState: () => any, dispatch: Dispatch, ...extraParams: any[]) => any) | any;
}

export interface VivyModelI18nsMapObject {
    [language: string]: VivyModelI18n;
}

export interface VivyI18nModel extends VivyModel<any> {
    i18ns?: VivyModelI18nsMapObject;
}
