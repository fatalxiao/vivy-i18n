/**
 * @file index.ts
 * @author Liangxiaojun
 */

// Models
import createI18n from './models/i18n';

// Hooks
import {useDispatch, useStore, useModel, useStoreState} from 'react-vivy';

// Types
import {VivyI18nModelState, VivyI18nPluginOption} from './types';
import {VivyPlugin, VivyStore} from 'vivy';
import {Dispatcher, DispatcherMapObject} from 'react-vivy/src/types';

/**
 * Default vivy-i18n options
 */
export const DEFAULT_OPTIONS: VivyI18nPluginOption = {
    i18nModelNameSpace: 'i18n',
    defaultLanguage: 'en-US'
};

type TranslateConfig = {
    store?: VivyStore,
    nameSpace?: string
}

/**
 * Translate method config
 */
const translateConfig: TranslateConfig = {
    store: undefined,
    nameSpace: DEFAULT_OPTIONS.i18nModelNameSpace
};

export * from './types';
export {I18n} from './components/I18n';

/**
 * Translate i18ns data by index
 * @param index
 * @param restArgs
 */
export function translate(index: string, restArgs = {}) {

    if (!translateConfig.store || !translateConfig.nameSpace || !index) {
        return '';
    }

    const {store, nameSpace: i18nModelNameSpace} = translateConfig;
    const {dispatch, getState} = store;
    const state = getState();
    const {language, defaultLanguage, data} = state[i18nModelNameSpace];

    // Parse index to nameSpace and key
    const [nameSpace, key] = index?.split('/') || [];

    // Get I18n config in data
    const i18ns = data[nameSpace];

    // Get current language message from I18n config
    const currentLanguageMessage = i18ns?.[language]?.[key];

    // Pass state to functional message
    if (currentLanguageMessage) {
        if (typeof currentLanguageMessage === 'function') {
            return currentLanguageMessage(getState, dispatch, restArgs || {});
        }
        return currentLanguageMessage;
    }

    // Get default language message from I18n config
    const defaultLanguageMessage = i18ns?.[defaultLanguage]?.[key];

    // Pass state to functional message
    if (defaultLanguageMessage) {
        if (typeof defaultLanguageMessage === 'function') {
            return defaultLanguageMessage(getState, dispatch, restArgs || {});
        }
        return defaultLanguageMessage;
    }

    return '';

}

/**
 * A hook to translate i18ns data by index.
 * Translate i18ns data by index
 */
export function useTranslate(index: string, restArgs = {}) {

    if (!index) {
        return '';
    }

    const {nameSpace: i18nModelNameSpace} = translateConfig;
    const store = useStore();
    const state = useStoreState();
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {getState} = store;
    const {language, defaultLanguage, data} = (i18nModelNameSpace && state?.[i18nModelNameSpace] || {});

    // Parse index to nameSpace and key
    const [nameSpace, key] = index?.split('/') || [];

    // Get I18n config in data
    const i18ns = data[nameSpace];

    // Get current language message from I18n config
    const currentLanguageMessage = i18ns?.[language]?.[key];

    // Pass state to functional message
    if (currentLanguageMessage) {
        if (typeof currentLanguageMessage === 'function') {
            return currentLanguageMessage(getState, dispatch, restArgs || {});
        }
        return currentLanguageMessage;
    }

    // Get default language message from I18n config
    const defaultLanguageMessage = i18ns?.[defaultLanguage]?.[key];

    // Pass state to functional message
    if (defaultLanguageMessage) {
        if (typeof defaultLanguageMessage === 'function') {
            return defaultLanguageMessage(getState, dispatch, restArgs || {});
        }
        return defaultLanguageMessage;
    }

    return '';

}

/**
 * A hook to access the state, actions and reducers from i18n model.
 */
export function useI18n(): [VivyI18nModelState, DispatcherMapObject] {
    return useModel(translateConfig?.nameSpace as string);
}

/**
 * A hook to access the language and switchLanguage from i18n model.
 */
export function useLanguage(): [string | undefined, Dispatcher] {
    const [{language}, {switchLanguage}] = useI18n();
    return [language, switchLanguage];
}

/**
 * A hook to access the defaultLanguage and switchDefaultLanguage from i18n model.
 */
export function useDefaultLanguage(): [string | undefined, Dispatcher] {
    const [{defaultLanguage}, {switchDefaultLanguage}] = useI18n();
    return [defaultLanguage, switchDefaultLanguage];
}

/**
 * Create Vivy I18n plugin
 * @param options
 */
export default function VivyI18n(options: VivyI18nPluginOption = {}): VivyPlugin {

    const opts = {...DEFAULT_OPTIONS, ...options};

    const {
        i18nModelNameSpace, language, defaultLanguage,
        onSwitchLanguage, onSwitchDefaultLanguage
    } = opts;

    translateConfig.nameSpace = i18nModelNameSpace;

    return {

        extraModels: [
            createI18n(
                i18nModelNameSpace, language, defaultLanguage,
                onSwitchLanguage, onSwitchDefaultLanguage
            )
        ],

        /**
         * Record vivyStore and i18nModelNameSpace when store created
         * @param vivyStore
         */
        onCreateStore: (vivyStore) => {
            translateConfig.store = vivyStore;
        },

        /**
         * Register I18ns when register a Vivy model
         * @param model
         * @param store
         */
        onRegisterModel: (model, store) => {

            if (!model || !store) {
                return;
            }

            const {nameSpace, i18ns} = model;

            // Register I18ns
            if (i18ns && Object.keys(i18ns).length > 0) {
                store?.dispatch({
                    type: `${i18nModelNameSpace as string}/register`,
                    nameSpace,
                    i18ns
                });
            }

        },

        /**
         * Unregister I18ns when unregister a Vivy model
         * @param model
         * @param store
         */
        onUnregisterModel: (model, store) => {

            if (!model || !store) {
                return;
            }

            const {nameSpace} = model;

            // Unregister I18ns
            store?.dispatch({
                type: `${i18nModelNameSpace as string}/unregister`,
                nameSpace
            });

        }

    };
}
