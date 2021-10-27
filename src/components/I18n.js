/**
 * @file I18n.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Root = ({
    children, i18nCurrentData,
    ...restProps
}) => (
    <span {...restProps}>
        {children?.(i18nCurrentData)}
    </span>
);

Root.propTypes = {
    children: PropTypes.func,
    i18nCurrentData: PropTypes.object
};

export default connect(state => ({
    i18nCurrentData: state.i18n.current
}))(Root);
