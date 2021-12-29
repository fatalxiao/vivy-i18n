/**
 * @file I18n.js
 */

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const I18n = ({
    index,
    dispatch
}) => dispatch({
    type: 'i18n/translate',
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

    dispatch: PropTypes.func

};

export default connect(state => ({
    defaultLanguage: state.i18n.defaultLanguage,
    language: state.i18n.language,
    data: state.i18n.data
}))(I18n);
