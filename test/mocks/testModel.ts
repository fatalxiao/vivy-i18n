/**
 * @file testModel.ts
 */

// Types
import {VivyI18nModel} from 'src/types';

export default <VivyI18nModel<string>>{
    nameSpace: 'testModel',
    state: 'testModelState',
    i18ns: {
        'en-US': {
            title: 'Title',
            text: 'Text',
            func: (getState: () => any) => `testModel state value: ${getState().testModel}`,
            withArgs: (_getState: any, _dispatch: any, {name}: any) => `${name} is required`
        },
        'zh-CN': {
            title: '标题',
            text: '正文',
            func: (getState: () => any) => `testModel state 的值: ${getState().testModel}`,
            withArgs: (_getState: any, _dispatch: any, {name}: any) => `请填写${name}`
        }
    }
};
