/**
 * @file index.js
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// Sync component and model
import Root from './modules/Root/containers/Root';
import root from './modules/Root/models/root';
import form from './modules/Form/models/form';

// Import Vivy
import Vivy from 'vivy';
import VivyI18n from '../../../src/index';

// Create vivy
const vivy = Vivy();

// Apply I18n plugin
vivy.use(VivyI18n());

// Create store after configuration
const store = vivy.createStore();

// Register vivy models
store.registerModels([
    root,
    form
]);

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app-container')
);
