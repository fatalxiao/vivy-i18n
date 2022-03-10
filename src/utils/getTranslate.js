/**
 * @file getTranslate.js
 */

export default ({store, nameSpace}) => index => {

    if (!store || !nameSpace || !index) {
        return '';
    }

    const {dispatch, getState} = store;
    const state = getState();
    const {language, defaultLanguage, data} = state.i18n;

    // Parse index to nameSpace and key
    const [nameSpace, key] = index?.split('/') || [];

    // Get I18n config in data
    const i18ns = data[nameSpace];

    // Get current language message from I18n config
    const currentLanguageMessage = i18ns?.[language]?.[key];

    // Pass state to functional message
    if (typeof currentLanguageMessage === 'function') {
        return currentLanguageMessage(getState, dispatch);
    }

    if (currentLanguageMessage) {
        return currentLanguageMessage;
    }

    // Get default language message from I18n config
    const defaultLanguageMessage = i18ns?.[defaultLanguage]?.[key];

    // Pass state to functional message
    if (typeof defaultLanguageMessage === 'function') {
        return defaultLanguageMessage(getState, dispatch);
    }

    if (defaultLanguageMessage) {
        return defaultLanguageMessage;
    }

    return '';

};
