/**
 * @file form.js
 */

export default {
    nameSpace: 'form',
    state: {
        userName: '',
        password: ''
    },
    i18ns: {
        'en-US': {
            userName: 'User Name',
            password: 'Password',
            passwordErrorMsg: state =>
                `Mini length is 5, current length is ${state.form.password?.length || 0}`
        },
        'zh-CN': {
            userName: '用户名',
            password: '密码',
            passwordErrorMsg: state =>
                `最小长度为 5, 当前长度为 ${state.form.password?.length || 0}`
        }
    },
    reducers: {

        /**
         * Update username to state
         * @param state
         * @param userName
         * @returns {*&{userName}}
         */
        updateUserName: (state, {userName}) => {
            return {
                ...state,
                userName
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
