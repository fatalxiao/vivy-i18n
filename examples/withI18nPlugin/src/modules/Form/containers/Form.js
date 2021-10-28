/**
 * @file Form.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import {I18n} from 'vivy-i18n';

const Form = ({
    userName, password,
    dispatch
}) => {

    /**
     * Update user name to state when changed
     * @type {(function(*): void)|*}
     */
    const handleUserNameChange = useCallback(e => {
        dispatch?.({
            type: 'form/updateUserName',
            userName: e.target.value
        });
    }, [
        dispatch
    ]);

    /**
     * Update password to state when changed
     * @type {(function(*): void)|*}
     */
    const handlePasswordChange = useCallback(e => {
        dispatch?.({
            type: 'form/updatePassword',
            password: e.target.value
        });
    }, [
        dispatch
    ]);

    return (
        <form>

            <p>
                <label>
                    <I18n index="form/userName"/>
                    <input value={userName}
                           onChange={handleUserNameChange}/>
                </label>
            </p>

            <p>
                <label>
                    <I18n index="form/password"/>
                    <input value={password}
                           onChange={handlePasswordChange}/>
                </label>
                {
                    password?.length < 8 ?
                        <I18n index="form/passwordErrorMsg"/>
                        :
                        null
                }
            </p>

        </form>
    );

};

Form.propTypes = {

    userName: PropTypes.string,
    password: PropTypes.string,

    dispatch: PropTypes.func

};

export default connect(state => ({
    userName: state.form.userName,
    password: state.form.password
}))(Form);
