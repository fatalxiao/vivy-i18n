/**
 * @file Form.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import {I18n} from 'vivy-i18n';

const Form = ({
    username, password,
    updateUserName, updatePassword, login
}) => {

    /**
     * Update username to state when changed
     * @type {(function(*): void)|*}
     */
    const handleUserNameChange = useCallback(e => {
        updateUserName?.({
            username: e.target.value
        });
    }, [
        updateUserName
    ]);

    /**
     * Update password to state when changed
     * @type {(function(*): void)|*}
     */
    const handlePasswordChange = useCallback(e => {
        updatePassword?.({
            password: e.target.value
        });
    }, [
        updatePassword
    ]);

    return (
        <form>

            <div>
                <label>
                    <I18n index="form/username"/>
                    <input value={username}
                           onChange={handleUserNameChange}
                           placeholder="admin"/>
                </label>
            </div>

            <div>
                <label>
                    <I18n index="form/password"/>
                    <input value={password}
                           onChange={handlePasswordChange}
                           placeholder="admin"/>
                </label>
                <div>
                    {
                        password && password?.length < 5 ?
                            <I18n index="form/passwordErrorMsg"/>
                            :
                            null
                    }
                </div>
            </div>

            <button type="button"
                    onClick={login}>
                Login
            </button>

        </form>
    );

};

Form.propTypes = {

    username: PropTypes.string,
    password: PropTypes.string,

    updateUserName: PropTypes.func,
    updatePassword: PropTypes.func,
    login: PropTypes.func

};

export default connect(state => ({
    username: state.form.username,
    password: state.form.password
}), dispatch => bindModelActionCreators({
    updateUserName: 'form/updateUserName',
    updatePassword: 'form/updatePassword',
    login: 'form/login'
}, dispatch))(Form);
