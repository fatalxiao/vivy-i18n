'use strict';

import Vivy from 'vivy';
import VivyI18n, {I18n} from '../src';

test('Use I18n', () => {

    const vivy = Vivy();
    vivy.use(VivyI18n());

    // eslint-disable-next-line no-unused-vars
    vivy.createStore();

    expect(
        typeof I18n
    ).toEqual(
        'function'
    );

});
