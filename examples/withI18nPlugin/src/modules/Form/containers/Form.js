/**
 * @file Form.js
 */

import React from 'react';

// Components
import {I18n} from 'vivy-i18n';

const Form = () => (
    <form>
        <label>
            <I18n index="form/firstName"/>
            <input/>
        </label>
        <label>
            <I18n index="form/lastName"/>
            <input/>
        </label>
    </form>
);

export default Form;
