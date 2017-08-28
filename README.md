# @immowelt/babel-preset-immowelt

[![Powered by Immowelt](https://img.shields.io/badge/powered%20by-immowelt-yellow.svg?colorB=ffb200)](https://stackshare.io/immowelt-group/)

[![Greenkeeper badge](https://badges.greenkeeper.io/ImmoweltGroup/babel-preset-immowelt.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/ImmoweltGroup/babel-preset-immowelt.svg?branch=master)](https://travis-ci.org/ImmoweltGroup/babel-preset-immowelt)
[![Dependency Status](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt.svg)](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt)
[![devDependency Status](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt/dev-status.svg)](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt#info=devDependencies&view=table)

This package is the default Babel preset which currently only consists of the `flow-strip-types` transform.

## Usage
If you want to use the `@immowelt/babel-preset-immowelt` preset, you can install it by executing:
```js
npm i -S @immowelt/babel-preset-immowelt
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```js
{
  "presets": [
    "@immowelt/babel-preset-immowelt"
  ]
}
```

## Contributing
Please make sure that you adhere to our code style, you can validate your changes / PR by executing `npm run lint`.
Visit the [eslint-config-immowelt-react](https://github.com/ImmoweltHH/eslint-config-immowelt-react) package for more information.

## License
See the `LICENSE` file at the root of the repository.
