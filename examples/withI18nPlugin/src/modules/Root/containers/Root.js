/**
 * @file Root.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import SwitchLanguage from './SwitchLanguage';
import Form from '../../Form/containers/Form';

const Root = ({
    title
}) => (
    <>
        <h1>{title}</h1>
        <SwitchLanguage/>
        <Form/>
    </>
);

Root.propTypes = {
    title: PropTypes.string
};

export default connect(state => ({
    title: state.i18n.current.root.title
}))(Root);
