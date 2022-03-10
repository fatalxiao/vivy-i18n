/**
 * @file testModel.js
 */

export default {
    nameSpace: 'testModel',
    state: 'testModelState',
    i18ns: {
        'en-US': {
            title: 'Title',
            text: 'Text',
            func: getState => `testModel state value: ${getState().testModel}`
        },
        'zh-CN': {
            title: '标题',
            text: '正文',
            func: getState => `testModel state 的值: ${getState().testModel}`
        }
    }
};
