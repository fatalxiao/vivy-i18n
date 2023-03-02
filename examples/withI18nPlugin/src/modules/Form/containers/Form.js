/**
 * @file Form.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-vivy';
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
        <form style={{
            padding: 16
        }}>

            <label style={{
                display: 'block',
                marginTop: 16
            }}>
                <I18n index="form/username"/>
                <input style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 160,
                    height: 32,
                    padding: '0 8px',
                    border: '1px solid #ddd',
                    borderRadius: 4
                }}
                       value={username}
                       onChange={handleUserNameChange}
                       placeholder="admin"/>
            </label>

            <label style={{
                display: 'block',
                marginTop: 16
            }}>
                <I18n index="form/password"/>
                <input style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 160,
                    height: 32,
                    padding: '0 8px',
                    border: '1px solid #ddd',
                    borderRadius: 4
                }}
                       value={password}
                       onChange={handlePasswordChange}
                       placeholder="admin"/>
            </label>

            {
                password && password?.length < 5 && (
                    <div style={{
                        display: 'inline-block',
                        padding: 8,
                        marginTop: 8,
                        background: '#fdd',
                        border: '1px solid #f55',
                        borderRadius: 8,
                        color: '#f55',
                        fontSize: 12
                    }}>
                        <I18n index="form/passwordErrorMsg"/>
                    </div>
                )
            }

            <button style={{
                display: 'block',
                marginTop: 32,
                width: 80,
                height: 32
            }}
                    type="button"
                    onClick={login}>
                <I18n index="form/login"/>
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
