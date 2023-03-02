/**
 * @file Root.js
 */

import React from 'react';

// Components
import {I18n} from 'vivy-i18n';
import SwitchLanguage from './SwitchLanguage';
import Form from '../../Form/containers/Form';

const Root = () => (
    <>

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

        <Form/>

    </>
);

export default Root;
