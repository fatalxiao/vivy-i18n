/**
 * @file Form.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Form = ({
    firstName, lastName
}) => (
    <form>
        <label>
            {firstName}
            <input/>
        </label>
        <label>
            {lastName}
            <input/>
        </label>
    </form>
);

Form.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
};

export default connect(state => ({
    firstName: state.i18n.current.form.firstName,
    lastName: state.i18n.current.form.lastName
}))(Form);
