/**
 * @file Form.js
 */

import React from 'react';
import {useModel} from 'react-vivy';
import {I18n, useI18n} from 'vivy-i18n';

const Form = () => {

    /**
     * Get state and reducer from model using hook "useModel".
     */
    const [{username, password}, {updateUserName, updatePassword, login}] = useModel('form');

    return (
        <form>

            <div>
                {/** Get i18n data by hook "useI18n" */}
                {useI18n('form/username')}
                <input value={username}
                       onChange={e => updateUserName?.({
                           username: e.target.value
                       })}
                       placeholder="admin"/>
            </div>

            <div>
                {/** Get i18n data by component <I18n/> */}
                <I18n index="form/password"/>
                <input value={password}
                       onChange={e => updatePassword?.({
                           password: e.target.value
                       })}
                       placeholder="admin"/>
            </div>

            {
                password && password?.length < 5 && (
                    <div style={{
                        color: '#f55'
                    }}>
                        <I18n index="form/passwordErrorMsg"/>
                    </div>
                )
            }

            <div>
                <button type="button"
                        onClick={login}>
                    <I18n index="form/login"/>
                </button>
            </div>

        </form>
    );

};

export default Form;
