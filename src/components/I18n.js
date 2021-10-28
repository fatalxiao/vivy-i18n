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

    const [nameSpace, key] = useMemo(() => {
        return index?.split('/') || [];
    }, [index]);

    const i18ns = useMemo(() => {
        return data[nameSpace];
    }, [
        data, nameSpace
    ]);

    const currentLanguageMessage = i18ns?.[language]?.[key];

    if (typeof currentLanguageMessage === 'function') {
        return currentLanguageMessage(state);
    }

    if (currentLanguageMessage) {
        return currentLanguageMessage;
    }

    const defaultLanguageMessage = i18ns?.[defaultLanguage]?.[key];

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

    index: PropTypes.any

};

export default connect(state => ({
    state,
    defaultLanguage: state.i18n.defaultLanguage,
    language: state.i18n.language,
    data: state.i18n.data
}))(I18n);
