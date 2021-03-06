# eslint-plugin-import-emotion

Ensure emotion is imported at the end of absolute imports\
See [`import-order-emotion`](./docs/rules/import-order-emotion.md) documentation for details

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-import-emotion`:

```
$ npm install eslint-plugin-import-emotion --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-emotion` globally.

## Usage

Add `import-order-emotion` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-order-emotion"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "import-order-emotion/import-order-emotion": "error"
    }
}
```

## Supported Rules

* [`import-order-emotion`](./docs/rules/import-order-emotion.md)





