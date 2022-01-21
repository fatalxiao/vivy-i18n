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

    /**
     * format: '{MODEL_NAMESPACE}/{I18N_KEY}'
     */
    index: PropTypes.any,

    dispatch: PropTypes.func

};

export default connect()(I18n);
