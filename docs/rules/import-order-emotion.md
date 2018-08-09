# Ensure emotion is imported at the end of absolute imports (import-order-emotion)

[Emotion](https://emotion.sh/) in production mode injects styles based on the order of `import` statements.\
This means that Emotion styles can be overwritten by third party libraries if emotion isn't the last absolute `import`.

## Rule Details

This rule checks if imports from `emotion` and `react-emotion` packages are at the end of absolute imports.

Internally it uses [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) to qualify `import` statements.\
See [`import/order` documentation](https://github.com/benmosher/eslint-plugin-import/blob/master/docs%2Frules%2Forder.md) for details.

Examples of **incorrect** code for this rule:

```js

import { css } from 'emotion';
import RaisedButton from 'material-ui/RaisedButton';

```

Examples of **correct** code for this rule:

```js

import RaisedButton from 'material-ui/RaisedButton';
import { css } from 'emotion';

```

## When Not To Use It

Do not use this rule if you don't use [Emotion](https://emotion.sh/).

## Further Reading

* See Emotion [issue #661](https://github.com/emotion-js/emotion/issues/661) for an explanation of the problem
