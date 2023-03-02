[npm-image]: https://img.shields.io/npm/v/vivy-i18n.svg?style=flat-square

[npm-url]: https://npmjs.org/package/vivy-i18n

[license-image]: https://img.shields.io/npm/l/vivy-i18n.svg?style=flat-square

[vivy-url]: https://github.com/fatalxiao/vivy

[connected-react-router-url]: https://github.com/supasate/connected-react-router

[with-i18n-plugin-example-url]: https://github.com/fatalxiao/vivy-i18n/tree/main/examples/withI18nPlugin

[pieb-with-dpe-frontend-url]: https://github.com/fatalxiao/pieb-with-dpe-frontend

[with-i18n-plugin-example-form-url]: https://github.com/fatalxiao/vivy-i18n/blob/main/examples/withI18nPlugin/src/modules/Form/models/form.js

# vivy-i18n

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][npm-url]

A [Vivy][vivy-url] plugin which extend Vivy model to implement i18n.

## Docs

* [Installation](#installation)
* [Examples](#examples)
    * [Examples in repository](#examples-in-repository)
    * [Complete and real project example](#complete-and-real-project-example)
* [Documentation](#documentation)
    * [Basic usage](#basic-usage)
    * [translate](#translate)
    * [I18n](#I18n)
    * [Hooks](#hooks)
        * [useI18n](#useI18n)
        * [useTranslate](#useTranslate)

## Installation

Using npm:

```shell
$ npm install vivy vivy-i18n
```

## Examples

### Examples in repository

```shell
$ cd ./examples/[EXAMPLE_NAME]
$ npm run start
```

**Example names**:

* [withI18nPlugin][with-i18n-plugin-example-url]

### Complete and real project example

* [pieb-with-dpe-frontend][pieb-with-dpe-frontend-url]

## Documentation

### Basic usage

index.js

```js
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-vivy';

// Import Vivy
import Vivy from 'vivy';

// Import Vivy i18n plugin
import VivyI18n from 'vivy-i18n';

// Import your component and model
import App from 'path_to_app_component';
import app from 'path_to_app_model';

// Create vivy
const vivy = Vivy();

// Apply I18n plugin
vivy.use(VivyI18n());

// Create store after configuration
const store = vivy.createStore();

// Register vivy models
store.registerModels([
    app
]);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app-container')
);
```

App.js

```js
import React from 'react';

// Import I18n translate component from plugin.
import {I18n} from 'vivy-i18n';

const App = () => (
    <I18n index="app/title"/>
);

export default App;
```

app.js

```js
export default {
    nameSpace: 'app',
    i18ns: {
        'en-US': {
            title: 'Vivy I18n exmaple'
        },
        'zh-ZN': {
            title: 'Vivy I18n 例子'
        }
    }
};
```

You can find detail usage in [form.js][with-i18n-plugin-example-form-url].

### `translate`

Get the i18n value in the right language. You can use it everywhere, but it won't change when language state changed.

```js
import {translate} from 'vivy-i18n';

const i18nValue = useTranslate('model_name_space/i18n_key');
```

### `I18n`

Get the i18n value in the right language. You can use it in React components.

```js
import {I18n} from 'vivy-i18n';

const App = () => (
    <I18n index="app/title"/>
);
```

### Hooks

#### `useI18n`

```js
import {useI18n} from 'vivy-i18n';

const [{language, defaultLanguage}, {translate, switchLanguage, switchDefaultLanguage}] = useI18n();
```

#### `useTranslate`

```js
import {useTranslate} from 'vivy-i18n';

const i18nValue = useTranslate('model_name_space/i18n_key');
```
