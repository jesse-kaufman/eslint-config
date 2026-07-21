const jsdocConfig = [
  // JSDoc for JavaScript only
  {
    name: "app/jsdoc-js-config",
    files: ["**/*.js"],
    rules: {
      //...jsdocPlugin.configs["flat/recommended-typescript-flavor"].rules,
      "jsdoc/prefer-import-tag": ["warn", { enableFixer: false }],
      "jsdoc/check-types": "error",
      "jsdoc/check-values": "warn",
    },
  },

  // Custom JSDoc configuration for all JavaScript/TypeScript files
  {
    name: "app/jsdoc-config",
    files: ["**/*.{js,ts,vue}"],
    rules: {
      // ============================================
      // JSDoc Rules
      // ============================================
      "jsdoc/tags": "off",
      "jsdoc/informative-docs": "warn",
      "jsdoc/require-hyphen-before-param-description": ["error", "never"],
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
          checkConstructors: false,
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
            "PropertyDefinition",
            "MethodDefinition",
            "ClassDeclaration",
            "ClassExpression",
          ],
        },
      ],
    },
  },
]

export default jsdocConfig
