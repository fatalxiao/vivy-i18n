/**
 * @file Form.js
 */

import React from 'react';
import {useModel} from 'react-vivy';
import {I18n, useTranslate} from 'vivy-i18n';

const Form = () => {

    /**
     * Get state and reducer from model using hook "useModel".
     */
    const [{username, password}, {updateUserName, updatePassword, login}] = useModel('form');

    return (
        <form style={{
            marginTop: 16
        }}>

            <div>
                {/** Get i18n data by hook "useTranslate" */}
                {useTranslate('form/username')}
                <div>
                    <input value={username}
                           onChange={e => updateUserName?.({
                               username: e.target.value
                           })}
                           placeholder="admin"/>
                </div>
            </div>

            <div>
                {/** Get i18n data by component <I18n/> */}
                <I18n index="form/password"/>
                <div>
                    <input value={password}
                           onChange={e => updatePassword?.({
                               password: e.target.value
                           })}
                           placeholder="admin"/>
                </div>
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

            <div style={{
                marginTop: 16
            }}>
                <button type="button"
                        onClick={login}>
                    <I18n index="form/login"/>
                </button>
            </div>

        </form>
    );

};

export default Form;
