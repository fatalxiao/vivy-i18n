/**
 * @file SwitchLanguage.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-vivy';
import {bindModelActionCreators} from 'vivy';

import './SwitchLanguage.scss';

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
        <select className="switch-language"
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
