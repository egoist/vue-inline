# vue-inline [![NPM version](https://img.shields.io/npm/v/vue-inline.svg?style=flat-square)](https://npmjs.com/package/vue-inline) [![NPM downloads](https://img.shields.io/npm/dm/vue-inline.svg?style=flat-square)](https://npmjs.com/package/vue-inline) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-inline/master.svg?style=flat-square)](https://circleci.com/gh/egoist/vue-inline)

Inline anything in your Vue component, like string / component / images et al

## Install

```bash
$ npm install --save vue-inline
```

## Usage

**Register the component globally:**

```js
import Inline from 'vue-inline'

Vue.use(Inline, {
  data: {
    // inline a string
    foo: 'inlined foo',
    // or an svg image with svg-inline-loader or file-loader
    bar: require('/path/to/bar.svg')
  }
})
```

**Inline it in your component:**

```vue
<template>
  <!-- render a srring -->
  <inline name="foo"></inline>
  <!-- render an image -->
  <inline name="bar"></inline>
</template>
```

**Or register the inline component locally:**

```js
import {makeComponent} from 'vue-inline'

const Inline = makeComponent(data)
// register `Inline` in your component
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
