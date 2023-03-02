/**
 * @file Root.js
 */

import React from 'react';

// Components
import {I18n} from 'vivy-i18n';
import SwitchLanguage from './SwitchLanguage';
import Form from '../../Form/containers/Form';

const Root = () => (
    <div style={{
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: 640,
        padding: 16,
        background: '#f8f8f8',
        borderRadius: 24
    }}>

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px'
        }}>

            <h1>
                {
                    /**
                     * I18ns config in root is:
                     * {
                     *     'en-US': {
                     *         title: 'Vivy I18n exmaple'
                     *     }
                     * }
                     *
                     * Default language config will be applied
                     * when current language not setted
                     */
                }
                <I18n index="root/title"/>
            </h1>

            <SwitchLanguage/>

        </div>

        <Form/>

    </div>
);

export default Root;
