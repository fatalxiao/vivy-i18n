/**
 * @file SwitchLanguage.js
 */

import React from 'react';
import {useModel} from 'react-vivy';

const SwitchLanguage = () => {

    /**
     * Get state and reducer from model using hook "useModel".
     */
    const [{language}, {switchLanguage}] = useModel('i18n');

    return (
        <select style={{
            width: 80,
            height: 40,
            background: 'transparent',
            border: 'none'
        }}
                value={language}
                onChange={e => switchLanguage?.({
                    language: e.target.value
                })}>
            <option value="en-US">
                en-US
            </option>
            <option value="zh-CN">
                zh-CN
            </option>
        </select>
    );

};

export default SwitchLanguage;
