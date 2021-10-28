/**
 * @file form.js
 */

export default {
    nameSpace: 'form',
    i18ns: {
        'en-US': {
            userName: 'User Name',
            password: 'Password',
            passwordErrorMsg: state =>
                `Mini length is 8, current length is ${state.form.password?.length || 0}`
        },
        'zh-CN': {
            userName: '用户名',
            password: '密码',
            passwordErrorMsg: state =>
                `最小长度为 8, 当前长度为 ${state.form.password?.length || 0}`
        }
    },
    state: {
        userName: '',
        password: ''
    },
    reducers: {

        /**
         * Update user name to state
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
