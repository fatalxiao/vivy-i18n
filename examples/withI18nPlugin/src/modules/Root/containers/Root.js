/**
 * @file Root.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Styles
import './Root.scss';

const Root = ({
    title
}) => (
    <div className="root">
        <h1>{title}</h1>
    </div>
);

Root.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

export default connect(state => ({
    title: state.i18n.data.root.title
}))(Root);
