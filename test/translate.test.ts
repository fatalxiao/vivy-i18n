'use strict';

import Vivy from 'vivy';
import VivyI18n, {translate} from '../src';

// Models
import testModel from './mocks/testModel';

test('Use translate', () => {

    const vivy = Vivy();
    vivy.use(VivyI18n());

    // eslint-disable-next-line no-unused-vars
    vivy.createStore();

    expect(
        typeof translate
    ).toEqual(
        'function'
    );

});

test('Use translate default en title', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/title')
    ).toEqual(
        testModel?.i18ns?.['en-US']?.title
    );

});

test('Use translate default en text', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/text')
    ).toEqual(
        testModel?.i18ns?.['en-US']?.text
    );

});

test('Use translate default en func', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/func')
    ).toEqual(
        testModel?.i18ns?.['en-US']?.func(store.getState)
    );

});

test('Use translate default zh title', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n({
        language: 'zh-CN'
    }));

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/title')
    ).toEqual(
        testModel?.i18ns?.['zh-CN']?.title
    );

});

test('Use translate default zh text', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n({
        language: 'zh-CN'
    }));

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/text')
    ).toEqual(
        testModel?.i18ns?.['zh-CN']?.text
    );

});

test('Use translate default zh func', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n({
        language: 'zh-CN'
    }));

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        translate('testModel/func')
    ).toEqual(
        testModel?.i18ns?.['zh-CN']?.func(store.getState)
    );

});

test('With extra args en-US', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n());

    const store = vivy.createStore();
    store.registerModel(testModel);

    const args = {
        name: translate('testModel/title')
    };

    expect(
        translate('testModel/withArgs', args)
    ).toEqual(
        testModel?.i18ns?.['en-US']?.withArgs(store.getState, store.dispatch, args)
    );

});

test('With extra args zh-CN', () => {

    const vivy = Vivy();

    vivy.use(VivyI18n({
        language: 'zh-CN'
    }));

    const store = vivy.createStore();
    store.registerModel(testModel);

    const args = {
        name: translate('testModel/title')
    };

    expect(
        translate('testModel/withArgs', args)
    ).toEqual(
        testModel?.i18ns?.['zh-CN']?.withArgs(store.getState, store.dispatch, args)
    );

});
