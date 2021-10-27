/**
 * @file Form.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import {I18n} from 'vivy-i18n';

const Form = ({
    firstName
}) => (
    <form>
        <label>
            {firstName}
            <input/>
        </label>
        <label>
            <I18n>
                {current => current.form.lastName}
            </I18n>
            <input/>
        </label>
    </form>
);

Form.propTypes = {
    firstName: PropTypes.string
};

export default connect(state => ({
    firstName: state.i18n.current.form.firstName
}))(Form);
