/**
 * @file Root.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Styles
import './Root.scss';

const Root = ({}) => (
    <div className="root">

    </div>
);

Root.propTypes = {};

export default connect(state => ({}))(Root);
