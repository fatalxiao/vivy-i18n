/**
 * @file I18n.js
 */

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const I18n = ({
    index, i18n,
    dispatch
}) => dispatch({
    type: 'i18n/translate',
    index
});

I18n.propTypes = {

    /**
     * format: '{MODEL_NAMESPACE}/{I18N_KEY}'
     */
    index: PropTypes.any,

    i18n: PropTypes.object,

    dispatch: PropTypes.func

};

export default connect(state => ({
    i18n: state.i18n
}))(I18n);
