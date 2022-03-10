/**
 * @file I18n.js
 */

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Vendors
import {translate} from '../index';

const I18n = ({
    index
}) => translate(index);

I18n.propTypes = {

    /**
     * format: '{MODEL_NAMESPACE}/{I18N_KEY}'
     */
    index: PropTypes.any,

    i18n: PropTypes.object

};

export default connect(state => ({
    i18n: state.i18n
}))(I18n);
