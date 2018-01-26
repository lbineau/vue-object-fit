# vue-object-fit

> Vue implementation of https://www.sarasoueidan.com/blog/svg-object-fit/
> [object-fit CSS property support is bad](https://caniuse.com/#feat=object-fit), Sara Oueidan propose an SVG object that is natively supported by major browsers

[![npm](https://img.shields.io/npm/v/vue-object-fit.svg) ![npm](https://img.shields.io/npm/dm/vue-object-fit.svg)](https://www.npmjs.com/package/vue-object-fit)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A Vue.js Plugin

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-object-fit
```

## Default import

Install all the components:

```javascript
import Vue from 'vue'
import VueObjectFit from 'vue-object-fit'

Vue.use(VueObjectFit)
```

Use specific components:

```javascript
import Vue from 'vue'
import { ObjectFitComponent } from 'vue-object-fit'

Vue.component('ObjectFitComponent', ObjectFitComponent)
```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Distribution import

Install all the components:

```javascript
import 'vue-object-fit/dist/vue-object-fit.css'
import VueObjectFit from 'vue-object-fit/dist/vue-object-fit.common'

Vue.use(VueObjectFit)
```

Use specific components:

```javascript
import 'vue-object-fit/dist/vue-object-fit.css'
import { ObjectFitComponent } from 'vue-object-fit/dist/vue-object-fit.common'

Vue.component('ObjectFitComponent', ObjectFitComponent)
```

**⚠️ You may have to setup your bundler to embed the css file in your page.**

## Browser

```html
<link rel="stylesheet" href="vue-object-fit/dist/vue-object-fit.css"/>

<script src="vue.js"></script>
<script src="vue-object-fit/dist/vue-object-fit.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

Install all the components:

```javascript
Vue.use(VueObjectFit)
```

Use specific components:

```javascript
Vue.component('ObjectFitComponenttest', VueObjectFit.ObjectFitComponent)
```

## Source import

Install all the components:

```javascript
import Vue from 'vue'
import VueObjectFit from 'vue-object-fit/src'

Vue.use(VueObjectFit)
```

Use specific components:

```javascript
import Vue from 'vue'
import { ObjectFitComponent } from 'vue-object-fit/src'

Vue.component('ObjectFitComponent', ObjectFitComponent)
```

**⚠️ You need to configure your bundler to compile `.vue` files.** More info [in the official documentation](https://vuejs.org/v2/guide/single-file-components.html).

# Usage

```html
<ObjectFitComponent
    url="https://loremflickr.com/1024/768/cat"
    width="100%"
    height="500px"
    :imgWidth="1024"
    :imgHeight="768"
    meetOrSlice="slice"
    align="xMidYMid"
    title="A lovely cat"
/>
```

---

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Use it in another project

While developping, you can follow the install instructions of your plugin and link it into the project that uses it.

In the plugin folder:

```
npm link
```

In the other project folder:

```
npm link vue-object-fit
```

This will install it in the dependencies as a symlink, so that it gets any modifications made to the plugin.

## Publish to npm

You may have to login to npm before, with `npm adduser`. The plugin will be built in production mode before getting published on npm.

```
npm publish
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
