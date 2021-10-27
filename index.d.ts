import * as I18n from './src/components/I18n';

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
    i18nModelNameSpace?: string

}

/**
 * Create Vivy I18n plugin instance
 * @param options
 */
export default function createVivyI18nPlugin(options?: VivyI18nPluginOption);
