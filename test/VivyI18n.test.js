'use strict';

import Vivy from 'vivy';
import VivyI18n, {translate} from '../src';

// Models
import testModel from './mocks/testModel';

test('Use Vivy I18n', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        typeof translate
    ).toEqual(
        'function'
    );

});

test('Use Vivy I18n by translate', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/title')
    ).toEqual(
        testModel.i18ns['en-US'].title
    );

});
