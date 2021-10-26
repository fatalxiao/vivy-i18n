/**
 * @file i18n.js
 */

/**
 * Create I18n model
 * @param nameSpace {string}
 * @returns {Object}
 */
export default function createI18n(nameSpace) {
    return {
        nameSpace: nameSpace || 'i18n',
        state: {},
        reducers: {

            /**
             * Register I18ns
             * @param state {Object}
             * @param nameSpace {string}
             * @param i18ns {Object}
             * @returns {Object}
             */
            register: (state, {nameSpace, i18ns}) => {
                return {
                    ...state,
                    [nameSpace]: i18ns
                };
            },

            /**
             * Unregister I18ns
             * @param state {Object}
             * @param nameSpace {string}
             * @returns {Object}
             */
            unregister: (state, {nameSpace}) => {

                const nextState = {
                    ...state
                };

                delete nextState[nameSpace];

                return nextState;

            }

        }
    };
}
