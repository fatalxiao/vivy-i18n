/**
 * @file form.js
 */

// Apis
import {login} from '../apis/FormApi';

// Vendors
import {translate} from 'vivy-i18n';

export default {
    nameSpace: 'form',
    state: {
        username: '',
        password: ''
    },
    i18ns: {
        'en-US': {
            username: 'User Name',
            password: 'Password',
            passwordErrorMsg: getState =>
                `Mini length is 5, current length is ${getState().form.password?.length || 0}.`,
            login: 'Login',
            loginSuccess: 'Login successfully!',
            loginFailure: 'Login failure!'
        },
        'zh-CN': {
            username: '用户名',
            password: '密码',
            passwordErrorMsg: getState =>
                `最小长度为 5, 当前长度为 ${getState().form.password?.length || 0}。`,
            login: '登录',
            loginSuccess: '登录成功！',
            loginFailure: '登录失败！'
        }
    },
    actions: {

        /**
         * Do login
         * @returns {(function(*, *): Promise<void>)|*}
         */
        login: () => async (dispatch, getState) => {

            const {username, password} = getState().form;

            try {

                const response = await login({
                    username,
                    password
                });

                alert(translate(`form/${response?.data?.code === 2000 ? 'loginSuccess' : 'loginFailure'}`));

            } catch (e) {
                // ...
            }

        }

    },
    reducers: {

        /**
         * Update username to state
         * @param state
         * @param username
         * @returns {*&{username}}
         */
        updateUserName: (state, {username}) => {
            return {
                ...state,
                username
            };
        },

        /**
         * Update password to state
         * @param state
         * @param password
         * @returns {*&{password}}
         */
        updatePassword: (state, {password}) => {
            return {
                ...state,
                password
            };
        }

    }
};
