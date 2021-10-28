/**
 * @file I18n.js
 */

import {useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const I18n = ({
    state, defaultLanguage, language, data,
    index
}) => {

    /**
     * Parse index to nameSpace and key
     */
    const [nameSpace, key] = useMemo(() => {
        return index?.split('/') || [];
    }, [
        index
    ]);

    /**
     * Get I18n config in data
     * @type {*}
     */
    const i18ns = useMemo(() => {
        return data[nameSpace];
    }, [
        data, nameSpace
    ]);

    /**
     * Get current language message from I18n config
     * @type {*}
     */
    const currentLanguageMessage = i18ns?.[language]?.[key];

    /**
     * Pass state to functional message
     */
    if (typeof currentLanguageMessage === 'function') {
        return currentLanguageMessage(state);
    }

    if (currentLanguageMessage) {
        return currentLanguageMessage;
    }

    /**
     * Get default language message from I18n config
     * @type {*}
     */
    const defaultLanguageMessage = i18ns?.[defaultLanguage]?.[key];

    /**
     * Pass state to functional message
     */
    if (typeof defaultLanguageMessage === 'function') {
        return defaultLanguageMessage(state);
    }

    if (defaultLanguageMessage) {
        return defaultLanguageMessage;
    }

    return '';

};

I18n.propTypes = {

    state: PropTypes.object,
    defaultLanguage: PropTypes.string,
    language: PropTypes.string,
    data: PropTypes.object,

    /**
     * format: '{MODEL_NAMESPACE}/{I18N_KEY}'
     */
    index: PropTypes.any

};

export default connect(state => ({
    state,
    defaultLanguage: state.i18n.defaultLanguage,
    language: state.i18n.language,
    data: state.i18n.data
}))(I18n);
