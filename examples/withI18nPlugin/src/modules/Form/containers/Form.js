/**
 * @file Form.js
 */

import React from 'react';

// Components
import {I18n} from 'vivy-i18n';

const Form = () => (
    <form>

        <p>
            <label>
                <I18n index="form/userName"/>
                <input/>
            </label>
        </p>

        <p>
            <label>
                <I18n index="form/password"/>
                <input/>
            </label>
        </p>

    </form>
);

export default Form;
