'use strict';

import Vivy from 'vivy';
import VivyI18n, {translate} from '../src';

// Models
import testModel from './mocks/testModel';

test('Use Vivy I18n', () => {

    const vivy = Vivy();
    vivy.use(VivyI18n());

    // eslint-disable-next-line no-unused-vars
    const store = vivy.createStore();

    expect(
        typeof translate
    ).toEqual(
        'function'
    );

});

test('Use Vivy I18n translate title', () => {

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

test('Use Vivy I18n translate text', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/text')
    ).toEqual(
        testModel.i18ns['en-US'].text
    );

});
