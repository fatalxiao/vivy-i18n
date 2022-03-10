/**
 * @file index.js
 */

// Models
import createI18n from './models/i18n';

// Utils
import getTranslate from './utils/getTranslate';

// Components
export I18n from './components/I18n';

/**
 * Default vivy-i18n options
 * @type {Object}
 */
const DEFAULT_OPTIONS = {
    i18nModelNameSpace: 'i18n',
    language: 'en-US',
    defaultLanguage: 'en-US'
};

const translateConfig = {
    store: null,
    nameSpace: DEFAULT_OPTIONS.i18nModelNameSpace
};

/**
 * Translate i18ns data by index
 * @param index
 * @returns {*}
 */
export function translate(index) {
    return getTranslate(translateConfig)(index);
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
