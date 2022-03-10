'use strict';

import Vivy from 'vivy';
import VivyI18n from '../src';

// Models
import testModel from './mocks/testModel';

test('Use Vivy Subscription', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        store.getState().testModel
    ).toEqual(
        null
    );

});
