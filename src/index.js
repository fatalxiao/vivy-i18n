/**
 * @file index.js
 */

// Models
import createI18n from './models/i18n';

// Components
export I18n from './components/I18n';

// Hooks
import {useSelector, useDispatch, useStore} from 'react-vivy';

/**
 * Default vivy-i18n options
 * @type {Object}
 */
const DEFAULT_OPTIONS = {

    i18nModelNameSpace: 'i18n',

    defaultLanguage: 'en-US'

    // language: 'en-US'

};

/**
 * Translate method config
 * @type {{store: null, nameSpace: string}}
 */
const translateConfig = {
    store: null,
    nameSpace: DEFAULT_OPTIONS.i18nModelNameSpace
};

/**
 * Translate i18ns data by index
 * @param index
 * @param restArgs
 * @returns {*}
 */
export function translate(index, restArgs = {}) {

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
 * @type {(function(*, {}=): *)|*}
 */
export function useI18n(index, restArgs = {}) {

    if (!index) {
        return '';
    }

    const {nameSpace: i18nModelNameSpace} = translateConfig;
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {getState} = useStore();
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
 * Create Vivy I18n plugin
 * @param options
 * @returns {Object}
 */
export default function VivyI18n(options = {}) {

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
        onCreateStore: vivyStore => {
            translateConfig.store = vivyStore;
        },

        /**
         * Register I18ns when register a Vivy model
         * @param model {Object}
         * @param store {Object}
         */
        onRegisterModel: (model, store) => {

            if (!model || !store) {
                return;
            }

            const {nameSpace, i18ns} = model;

            // Register I18ns
            if (i18ns && Object.keys(i18ns).length > 0) {
                store?.dispatch({
                    type: `${i18nModelNameSpace}/register`,
                    nameSpace,
                    i18ns
                });
            }

        },

        /**
         * Unregister I18ns when unregister a Vivy model
         * @param model {Object}
         * @param store {Object}
         */
        onUnregisterModel: (model, store) => {

            if (!model || !store) {
                return;
            }

            const {nameSpace} = model;

            // Unregister I18ns
            store?.dispatch({
                type: `${i18nModelNameSpace}/unregister`,
                nameSpace
            });

        }

    };
}
