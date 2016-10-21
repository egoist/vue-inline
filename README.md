# vue-inline [![NPM version](https://img.shields.io/npm/v/vue-svg-icon.svg?style=flat-square)](https://npmjs.com/package/vue-svg-icon) [![NPM downloads](https://img.shields.io/npm/dm/vue-svg-icon.svg?style=flat-square)](https://npmjs.com/package/vue-svg-icon) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-svg-icon/master.svg?style=flat-square)](https://circleci.com/gh/egoist/vue-svg-icon)

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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
