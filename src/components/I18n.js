/**
 * @file I18n.js
 */

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

const I18n = ({
    index,
    translate
}) => translate({
    index
});

I18n.propTypes = {

    defaultLanguage: PropTypes.string,
    language: PropTypes.string,
    data: PropTypes.object,

    /**
     * format: '{MODEL_NAMESPACE}/{I18N_KEY}'
     */
    index: PropTypes.any,

    translate: PropTypes.func

};

export default connect(state => ({
    defaultLanguage: state.i18n.defaultLanguage,
    language: state.i18n.language,
    data: state.i18n.data
}), dispatch => bindModelActionCreators({
    translate: 'i18n/translate'
}, dispatch))(I18n);
