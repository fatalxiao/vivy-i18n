/**
 * @file SwitchLanguage.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-vivy';
import {bindModelActionCreators} from 'vivy';

const SwitchLanguage = ({
    language,
    switchLanguage
}) => {

    /**
     * Update language to I18n plugin when changed
     * @type {(function(*): void)|*}
     */
    const handleChange = useCallback(e => {
        switchLanguage?.({
            language: e.target.value
        });
    }, [
        switchLanguage
    ]);

    return (
        <select style={{
            width: 80,
            height: 40,
            background: 'transparent',
            border: 'none'
        }}
                value={language}
                onChange={handleChange}>
            <option value="en-US">
                en-US
            </option>
            <option value="zh-CN">
                zh-CN
            </option>
        </select>
    );

};

SwitchLanguage.propTypes = {

    language: PropTypes.string,

    switchLanguage: PropTypes.func

};

export default connect(state => ({
    language: state.i18n.language
}), dispatch => bindModelActionCreators({
    switchLanguage: 'i18n/switchLanguage'
}, dispatch))(SwitchLanguage);
