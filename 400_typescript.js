/** @file TypeScript-specific ESLint configuration with type-checking. */
import path from "node:path"
import { tseslint, tsParser } from "./100_plugins.js"

// Get project root directory (parent of eslint directory)
const projectRoot = path.dirname(import.meta.dirname)

// Shared TypeScript rules used by both .ts and .vue files
// This prevents duplication of rules between typescript and vue configs
const sharedTypeScriptRules = {
  // Spread in TypeScript ESLint strict and stylistic type-checked rules
  ...tseslint.configs.strict.rules,
  ...tseslint.configs.stylisticTypeChecked,

  // Note: JSDoc rules are handled by eslint/jsdoc.js, not here
  // This prevents the TypeScript preset from overwriting custom JSDoc rules

  // ============================================
  // Type Inference Rules
  // ============================================
  "@typescript-eslint/no-inferrable-types": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/no-unnecessary-type-arguments": "warn",
  "@typescript-eslint/no-unnecessary-type-constraint": "warn",

  // ============================================
  // Type Safety
  // ============================================
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-invalid-void-type": "error",

  // ============================================
  // Modern JavaScript/TypeScript Patterns
  // ============================================
  "@typescript-eslint/prefer-nullish-coalescing": [
    "warn",
    { ignoreConditionalTests: true, ignoreBooleanCoercion: true },
  ],
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-for-in-array": "warn",
  "@typescript-eslint/prefer-for-of": "warn",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-require-imports": "error",

  // ============================================
  // Type Definition Consistency
  // ============================================
  "@typescript-eslint/array-type": ["error", { default: "array" }],
  "@typescript-eslint/consistent-generic-constructors": [
    "error",
    "constructor",
  ],
  "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
  "@typescript-eslint/consistent-type-assertions": "error",
  "@typescript-eslint/consistent-type-definitions": "error",
  "@typescript-eslint/no-empty-object-type": "error",
  "@typescript-eslint/no-duplicate-type-constituents": "error",
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-redundant-type-constituents": "error",

  // ============================================
  // Code Consistency
  // ============================================
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "error",
  "init-declarations": "off",
  "@typescript-eslint/init-declarations": "error",
  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "error",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",
  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": [
    "error",
    {
      ignoreTypeIndexes: true,
      ignoreNumericLiteralTypes: true,
      ignoreEnums: true,
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 100, 255],
      enforceConst: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
      ignoreReadonlyClassProperties: true,
    },
  ],
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "error",
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": [
    "warn",
    { prefer: "type-imports" },
  ],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
  "@typescript-eslint/explicit-function-return-type": ["warn"],
  "@typescript-eslint/no-array-delete": "error",
  "@typescript-eslint/method-signature-style": ["error", "method"],
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-meaningless-void-operator": "error",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-misused-spread": "error",
  "@typescript-eslint/no-mixed-enums": "error",
  "@typescript-eslint/no-non-null-assertion": "error",
  "@typescript-eslint/no-unnecessary-condition": "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
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
  // TypeScript configuration with type-checking
  // Applies to all .ts files across the monorepo
  {
    name: "app/typescript-config",
    files: [
      "scripts/*.ts",
      "packages/backend/**/*.ts",
      "packages/shared/**/*.ts",
      "packages/frontend/**/*.ts",
      "packages/config/**/*.ts",
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: projectRoot,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: sharedTypeScriptRules,
  },
]

// Export both the config and the shared rules for use in vue.js
export { sharedTypeScriptRules }
export default typeScriptConfig
