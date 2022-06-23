/**
 * @file I18n.js
 */

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Vendors
import {translate} from '../index';

const I18n = ({

    index,

    // not passing down these props
    state, dispatch,

    ...restProps

}) => translate(index, restProps);

I18n.propTypes = {

    /**
     * format: '{MODEL_NAMESPACE}/{I18N_KEY}'
     */
    index: PropTypes.any

};

export default connect(state => ({
    state
}))(I18n);
