/** @file JSDoc-specific ESLint configuration. */
import jsdoc from "eslint-plugin-jsdoc"

const jsdocConfig = [
  // JSDoc for JavaScript only
  {
    name: "app/jsdoc-js-config",
    files: ["**/*.js"],
    rules: {
      ...jsdoc.configs["flat/recommended-typescript-flavor"].rules,
    },
  },

  // JSDoc recommended config for TypeScript files
  {
    name: "app/jsdoc-typescript-recommended",
    files: ["**/*.ts"],
    rules: {
      ...jsdoc.configs["flat/recommended-typescript"].rules,
      "jsdoc/require-throws-type": "off",
    },
  },

  // Custom JSDoc configuration for all JavaScript/TypeScript files
  {
    name: "app/jsdoc-config",
    files: ["**/*.{js,ts}"],
    rules: {
      // ============================================
      // JSDoc Rules
      // ============================================
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-line-alignment": "warn",
      "jsdoc/check-param-names": ["error", { enableFixer: true }],
      "jsdoc/check-syntax": "error",
      "jsdoc/check-types": "error",
      "jsdoc/check-values": "warn",
      "jsdoc/informative-docs": "warn",
      "jsdoc/lines-before-block": [
        "warn",
        {
          lines: 1,
          ignoreSameLine: false,
          checkBlockStarts: false,
          ignoreSingleLines: true,
        },
      ],
      "jsdoc/no-undefined-types": [
        "error",
        {
          definedTypes: [
            "StringConstructor",
            "BooleanConstructor",
            "ArrayConstructor",
            "ObjectConstructor",
            "DateConstructor",
          ],
        },
      ],
      "jsdoc/prefer-import-tag": ["warn", { enableFixer: false }],
      "jsdoc/require-asterisk-prefix": "warn",
      "jsdoc/require-description": "warn",
      "jsdoc/require-description-complete-sentence": "warn",
      "jsdoc/require-file-overview": ["warn"],
      "jsdoc/require-hyphen-before-param-description": "warn",
      "jsdoc/require-jsdoc": [
        "warn",
        {
          publicOnly: false,
          require: {
            FunctionDeclaration: true,
            FunctionExpression: true,
            ArrowFunctionExpression: false,
            MethodDefinition: true,
            ClassDeclaration: true,
            ClassExpression: true,
          },
          contexts: [
            // Top-level function declarations
            "FunctionDeclaration",

            // Arrow and function expressions assigned to variables
            "VariableDeclarator > ArrowFunctionExpression",
            "VariableDeclarator > FunctionExpression",

            // Exported functions and variables assigned to functions
            "ExportNamedDeclaration > FunctionDeclaration",
            "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression",
            "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > FunctionExpression",
            "ExportDefaultDeclaration > FunctionDeclaration",
            "ExportDefaultDeclaration > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression",
            "ExportDefaultDeclaration > VariableDeclaration > VariableDeclarator > FunctionExpression",

            // Class stuff
            "MethodDefinition",
            "ClassDeclaration",
            "ClassExpression",
          ],
        },
      ],
      "jsdoc/require-throws": "warn",
      "jsdoc/sort-tags": [
        "warn",
        {
          tagSequence: [
            { tags: ["callback"] },
            { tags: ["since", "access"] },
            { tags: ["class", "augments", "mixes"] },
            { tags: ["alias", "memberof"] },
            { tags: ["see", "link", "global"] },
            { tags: ["fires", "listens"] },
            { tags: ["param"] },
            { tags: ["yields"] },
            { tags: ["returns"] },
          ],
          linesBetween: 0,
        },
      ],
    },
  },
]

export default jsdocConfig
