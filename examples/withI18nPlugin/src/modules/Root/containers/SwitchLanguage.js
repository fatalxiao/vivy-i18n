/**
 * @file SwitchLanguage.js
 */

import React from 'react';
import {useI18n} from 'vivy-i18n';

const SwitchLanguage = () => {

    /**
     * Get state and reducer from i18n model using hook "useI18n".
     */
    const [{language}, {switchLanguage}] = useI18n();

    console.log('language::', language);

    return (
        <select value={language}
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
