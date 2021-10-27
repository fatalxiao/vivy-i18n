/**
 * @file Root.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import Form from '../../Form/containers/Form';

const Root = ({
    title
}) => (
    <>
        <h1>{title}</h1>
        <Form/>
    </>
);

Root.propTypes = {
    title: PropTypes.string
};

export default connect(state => ({
    title: state.i18n.data.root.title
}))(Root);
