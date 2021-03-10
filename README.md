# Deprecation Notice

These days I prefer to use https://github.com/xojs/xo rather than maintaining
a custom configuration; so this config will not be receiving future updates.

# eslint-config-cssnano [![Build Status](https://travis-ci.org/ben-eb/eslint-config-cssnano.svg?branch=master)][ci]

> Shared eslint config for cssnano.


## Install

With [npm](https://npmjs.org/package/eslint-config-cssnano) do:

```
npm install eslint-config-cssnano --save-dev
```

Note that for Node versions below 5, you must install the following plugins
along with eslint-config-cssnano;

```
npm install eslint-plugin-babel eslint-plugin-import --save-dev
```


## Example

In `package.json`:

```json
{
    "eslintConfig": {
        "extends": "cssnano"
    }
}
```


## Flow

To use the Flow configuration, you must install the following plugins on top
of the default dependencies;

```
npm install eslint-plugin-flow-vars eslint-plugin-flowtype --save-dev
```

Then in `package.json`;

```json
{
    "eslintConfig": {
        "extends": "cssnano/flow"
    }
}
```


## License

MIT © [Ben Briggs](http://beneb.info)


[ci]: https://travis-ci.org/ben-eb/eslint-config-cssnano
