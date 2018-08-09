/**
* @fileoverview Ensure emotion is imported at the end
* @author jfrej
*/
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/import-order-emotion"),

RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var errorMessage = "Absolute imports should come before emotion imports";

ruleTester.run("import-emotion", rule, {
  
  valid: [
    {
      code: "import _ from 'lodash';\n" +
        "import { css } from 'emotion';"
    },
    {
      code: "import _ from 'lodash';\n" +
        "import styled from 'react-emotion';"
    },
    {
      code: "import fs from 'fs';\n" +
        "import { css } from 'emotion';"
    },
    {
      code: "import fs from 'fs';\n" +
        "import styled from 'react-emotion';"
    },
    {
      code: "import _ from 'lodash';\n" +
        "import { css } from 'emotion';\n" +
        "import a from './foo';"
    },
    {
      code: "import _ from 'lodash';\n" +
        "import { css } from 'react-emotion';\n" +
        "import a from './foo';"
    },
  ],
  
  invalid: [
    {
      code: "import { css } from 'emotion';\n" +
        "import _ from 'lodash';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
    {
      code: "import { css } from 'react-emotion';\n" +
        "import _ from 'lodash';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
    {
      code: "import styled from 'react-emotion';\n" +
        "import _ from 'lodash';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
    {
      code: "import { css } from 'emotion';\n" +
        "import RaisedButton from 'material-ui/RaisedButton';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
    {
      code: "import { css } from 'react-emotion';\n" +
        "import RaisedButton from 'material-ui/RaisedButton';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
    {
      code: "import styled from 'react-emotion';\n" +
        "import RaisedButton from 'material-ui/RaisedButton';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
    {
      code: "import { css } from 'emotion';\n" +
        "import fs from 'fs';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
    {
      code: "import styled from 'react-emotion';\n" +
        "import fs from 'fs';",
      errors: [{
        message: errorMessage,
        type: "ImportDeclaration"
      }]
    },
  ]
});
