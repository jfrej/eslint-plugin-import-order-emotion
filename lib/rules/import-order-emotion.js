/**
 * @fileoverview Ensure emotion is imported at the end of external imports
 * @author jfrej
 */
"use strict";

const importType = require('eslint-plugin-import/lib/core/importType').default;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Ensure emotion is imported at the end of external imports",
            category: "ECMAScript 6",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        let previousDeclaration = null;

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function isEmotionImport(node) {
            return node.source.value === 'emotion' || node.source.value === 'react-emotion';
        }

        function shouldIgnore(node) {
            const type = importType(node.source.value, context);

            return type !== 'builtin' && type !== 'external';
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
  
        return {
            ImportDeclaration(node) {
                if (node.specifiers.length) { // Ignoring unassigned imports
                    if (previousDeclaration && isEmotionImport(previousDeclaration) && !shouldIgnore(node)) {
                        context.report(node, 'Absolute imports should come before emotion imports');
                    }
                }
                
                previousDeclaration = node;
            }
        };
    }
};
