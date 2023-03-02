/**
 * @file Form.js
 */

import React from 'react';
import {useModel} from 'react-vivy';

// Components
import {I18n} from 'vivy-i18n';

const Form = () => {

    /**
     * Get state and reducer from model using hook "useModel".
     */
    const [{username, password}, {updateUserName, updatePassword, login}] = useModel('form');

    return (
        <form>

            <div>
                <I18n index="form/username"/>
                <input value={username}
                       onChange={e => updateUserName?.({
                           username: e.target.value
                       })}
                       placeholder="admin"/>
            </div>

            <div>
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
