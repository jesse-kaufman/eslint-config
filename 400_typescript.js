/** @file TypeScript-specific ESLint configuration with type-checking. */

import path from "node:path"
import { configs as tsConfigs, parser as tsParser, plugin as tsPlugin } from "typescript-eslint"

// Get project root directory (parent of ESLint directory)
const projectRoot = path.dirname(import.meta.dirname)

// Shared TypeScript rules used by Vue.js files
// This prevents duplication of rules between TypeScript and Vue.js configs
const sharedTypeScriptRules = {
  // Note: JSDoc rules are handled by ESLint/jsdoc.js, not here
  // This prevents the TypeScript preset from overwriting custom JSDoc rules
  "no-restricted-imports": [
    "warn",
    {
      patterns: [
        {
          regex: "^\\.\\.?/.*\\.js$",
          message: "Omit the .js extension on relative imports.",
        },
      ],
    },
  ],

  // ============================================
  // Code Consistency
  // ============================================

  "@typescript-eslint/member-ordering": [
    "warn",
    {
      default: {
        memberTypes: [
          // Index signature
          "signature",
          "call-signature",

          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "#private-static-field",

          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "#private-instance-field",

          "public-abstract-field",
          "protected-abstract-field",

          "public-field",
          "protected-field",
          "private-field",
          "#private-field",

          "static-field",
          "instance-field",
          "abstract-field",

          "decorated-field",

          "field",

          // Static initialization
          "static-initialization",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Accessors
          "public-static-accessor",
          "protected-static-accessor",
          "private-static-accessor",
          "#private-static-accessor",

          "public-decorated-accessor",
          "protected-decorated-accessor",
          "private-decorated-accessor",

          "public-instance-accessor",
          "protected-instance-accessor",
          "private-instance-accessor",
          "#private-instance-accessor",

          "public-abstract-accessor",
          "protected-abstract-accessor",

          "public-accessor",
          "protected-accessor",
          "private-accessor",
          "#private-accessor",

          "static-accessor",
          "instance-accessor",
          "abstract-accessor",

          "decorated-accessor",

          "accessor",

          // Getters
          "public-static-get",
          "protected-static-get",
          "private-static-get",
          "#private-static-get",

          "public-decorated-get",
          "protected-decorated-get",
          "private-decorated-get",

          "public-instance-get",
          "protected-instance-get",
          "private-instance-get",
          "#private-instance-get",

          "public-abstract-get",
          "protected-abstract-get",

          "public-get",
          "protected-get",
          "private-get",
          "#private-get",

          "static-get",
          "instance-get",
          "abstract-get",

          "decorated-get",

          "get",

          // Setters
          "public-static-set",
          "protected-static-set",
          "private-static-set",
          "#private-static-set",

          "public-decorated-set",
          "protected-decorated-set",
          "private-decorated-set",

          "public-instance-set",
          "protected-instance-set",
          "private-instance-set",
          "#private-instance-set",

          "public-abstract-set",
          "protected-abstract-set",

          "public-set",
          "protected-set",
          "private-set",
          "#private-set",

          "static-set",
          "instance-set",
          "abstract-set",

          "decorated-set",

          "set",

          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "#private-static-method",

          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",

          "private-instance-method",
          "#private-instance-method",
          "public-instance-method",
          "protected-instance-method",

          "public-abstract-method",
          "protected-abstract-method",

          "private-method",
          "#private-method",
          "public-method",
          "protected-method",

          "static-method",
          "instance-method",
          "abstract-method",

          "decorated-method",

          "method",
        ],
      },
    },
  ],
}

const typeScriptConfig = [
  {
    name: "app/typescript-config",
    files: ["*.ts", "**/*.ts"],
    // Spread in TypeScript ESLint strict and stylistic type-checked rules

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: projectRoot,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: sharedTypeScriptRules,
  },
]

// Export both the config and the shared rules for use in Vue.js
export { sharedTypeScriptRules }
export default typeScriptConfig
