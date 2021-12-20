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
    userName, password,
    updateUserName, updatePassword
}) => {

    /**
     * Update username to state when changed
     * @type {(function(*): void)|*}
     */
    const handleUserNameChange = useCallback(e => {
        updateUserName?.({
            userName: e.target.value
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
                    <I18n index="form/userName"/>
                    <input value={userName}
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

        </form>
    );

};

Form.propTypes = {

    userName: PropTypes.string,
    password: PropTypes.string,

    updateUserName: PropTypes.func,
    updatePassword: PropTypes.func

};

export default connect(state => ({
    userName: state.form.userName,
    password: state.form.password
}), dispatch => bindModelActionCreators({
    updateUserName: 'form/updateUserName',
    updatePassword: 'form/updatePassword'
}, dispatch))(Form);
