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
                       onChange={e => updateUserName?.({
                           username: e.target.value
                       })}
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
                       onChange={e => updatePassword?.({
                           password: e.target.value
                       })}
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

export default Form;
