/**
 * @file index.js
 */

// Models
import createI18n from './models/i18n';

// Components
export I18n from './components/I18n';

/**
 * Default vivy-i18n options
 * @type {Object}
 */
const DEFAULT_OPTIONS = {
    i18nModelNameSpace: 'i18n',
    defaultLanguage: 'en-US'
};

/**
 * Vivy store
 * @type {null}
 */
let store = null;

/**
 * I18n plugin name space
 * @type {string}
 */
let nameSpace = DEFAULT_OPTIONS.i18nModelNameSpace;

/**
 * Translate i18ns data by index
 * @param index
 * @returns {*}
 */
export function translate(index) {
    return store?.dispatch?.({
        type: `${nameSpace}/translate`,
        index
    });
}

/**
 * Create Vivy I18n plugin
 * @param options
 * @returns {Object}
 */
export default function VivyI18n(options = {}) {

    const opts = {...DEFAULT_OPTIONS, ...options};

    const {i18nModelNameSpace, defaultLanguage} = opts;

    return {

        extraModels: [
            createI18n(i18nModelNameSpace, defaultLanguage)
        ],

        /**
         * Record vivyStore and i18nModelNameSpace when store created
         * @param vivyStore
         */
        onCreateStore: vivyStore => {
            store = vivyStore;
            nameSpace = i18nModelNameSpace;
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
