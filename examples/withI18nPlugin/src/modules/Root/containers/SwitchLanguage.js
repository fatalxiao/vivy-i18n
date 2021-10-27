/**
 * @file Root.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Root = ({
    language,
    dispatch
}) => {

    const handleChange = useCallback(e => {
        dispatch?.({
            type: 'i18n/switchLanguage',
            language: e.target.value
        });
    }, [
        dispatch
    ]);

    return (
        <select value={language}
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

Root.propTypes = {

    language: PropTypes.string,

    dispatch: PropTypes.func

};

export default connect(state => ({
    language: state.i18n.language
}))(Root);
