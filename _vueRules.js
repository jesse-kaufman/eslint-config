/** @file Vue-specific ESLint configuration with TypeScript support. */

import vue from "eslint-plugin-vue"
import sharedTypeScriptRules from "./_typescriptRules.js"

const vueRules = {
  // Recommended configurations (must come before custom config)
  ...vue.configs["flat/recommended"].rules,

  // ============================================
  // TypeScript
  // ============================================
  // Inherit shared TypeScript rules to avoid duplication
  ...sharedTypeScriptRules,

  // ============================================
  // Template Safety
  // ============================================
  "vue/no-v-html": "warn",
  "vue/no-v-text": ["warn"],
  "vue/no-template-target-blank": ["warn"],
  "vue/no-root-v-if": ["warn"],
  "@typescript-eslint/no-useless-default-assignment": "off",

  // ============================================
  // Template Best Practices
  // ============================================
  "vue/block-lang": ["warn", { script: { lang: "ts" } }],
  "vue/next-tick-style": ["warn", "promise"],
  "vue/no-useless-mustaches": ["warn"],
  "vue/no-useless-v-bind": ["warn"],
  "vue/no-negated-v-if-condition": ["warn"],
  "vue/no-ref-object-reactivity-loss": ["warn"],
  "vue/prefer-use-template-ref": ["warn"],
  "vue/prefer-separate-static-class": ["warn"],

  // ============================================
  // Component Best Practices
  // ============================================
  "vue/define-macros-order": [
    "warn",
    {
      order: ["defineOptions", "defineEmits", "defineModel", "defineProps"],
      defineExposeLast: true,
    },
  ],
  "vue/component-api-style": ["warn", ["script-setup"]],
  "vue/component-name-in-template-casing": [
    "warn",
    "PascalCase",
    {
      registeredComponentsOnly: false,
      ignores: ["tableau-viz"],
    },
  ],
  "vue/match-component-file-name": ["warn", { extensions: ["vue"], shouldMatchCase: true }],
  "vue/match-component-import-name": ["warn"],
  "vue/no-undef-properties": ["warn"],
  "vue/no-undef-components": [
    "warn",
    { ignorePatterns: ["RouterLink", "RouterView", "tableau-viz"] },
  ],
  "vue/no-unused-properties": ["warn"],
  "vue/no-unused-refs": ["warn"],
  "vue/no-unused-emit-declarations": ["warn"],
  "vue/no-duplicate-attr-inheritance": ["warn", { checkMultiRootNodes: true }],
  "vue/no-import-compiler-macros": ["warn"],

  // ============================================
  // Props & Events
  // ============================================
  "vue/v-on-event-hyphenation": ["warn", "never", { autofix: true }],
  "vue/prop-name-casing": ["warn", "camelCase"],
  "vue/prefer-prop-type-boolean-first": ["warn"],
  "vue/custom-event-name-casing": ["warn", "camelCase"],
  "vue/prefer-true-attribute-shorthand": ["warn"],

  // ============================================
  // Template Formatting
  // ============================================
  "vue/html-indent": 0,
  "vue/singleline-html-element-content-newline": 0,
  "vue/html-button-has-type": ["warn"],
  "vue/html-self-closing": [
    "warn",
    {
      html: { void: "always", normal: "always" },
      svg: "always",
      math: "always",
    },
  ],
  "vue/attribute-hyphenation": [
    "warn",
    "never",
    {
      ignore: [],
      ignoreTags: [],
    },
  ],
  "vue/max-attributes-per-line": "off",

  // ============================================
  // Style & Static Content
  // ============================================
  "vue/enforce-style-attribute": ["warn", { allow: ["scoped"] }],
  "vue/no-multiple-objects-in-class": ["warn"],
  "vue/no-static-inline-styles": ["warn"],

  // ============================================
  // Template Spacing
  // ============================================
  "vue/padding-line-between-blocks": ["warn"],
  "vue/padding-line-between-tags": [
    "warn",
    [
      { blankLine: "always", prev: "tr", next: "tr" },
      { blankLine: "always", prev: "thead", next: "tbody" },
      { blankLine: "always", prev: "tbody", next: "tfoot" },
    ],
  ],

  // ============================================
  // Code Consistency
  // ============================================
  "import-x/no-unresolved": "off",
  "import-x/namespace": "off",
  "import-x/default": "off",
  "no-unused-vars": "off",

  // ============================================
  // Type Inference Rules
  // ============================================
  "@typescript-eslint/no-inferrable-types": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/no-unnecessary-type-arguments": "warn",

  // ============================================
  // Type Safety
  // ============================================
  "@typescript-eslint/no-unnecessary-type-conversion": "warn",
  "@typescript-eslint/no-unsafe-argument": "warn",
  "@typescript-eslint/no-unsafe-member-access": ["warn", { allowOptionalChaining: true }],
  "@typescript-eslint/no-confusing-void-expression": [
    "warn",
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
      ignoreVoidReturningFunctions: true,
    },
  ],
  "@typescript-eslint/prefer-reduce-type-parameter": "warn",
  "@typescript-eslint/restrict-template-expressions": [
    "warn",
    { allowNumber: true, allowBoolean: true },
  ],

  // ============================================
  // Modern JavaScript/TypeScript Patterns
  // ============================================
  "@typescript-eslint/prefer-nullish-coalescing": [
    "warn",
    { ignoreConditionalTests: true, ignoreBooleanCoercion: true },
  ],
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/no-import-type-side-effects": "warn",
  "@typescript-eslint/no-for-in-array": "warn",
  "@typescript-eslint/prefer-for-of": "warn",

  // ============================================
  // Type Definition Consistency
  // ============================================
  "@typescript-eslint/array-type": ["warn", { default: "array" }],
  "@typescript-eslint/consistent-generic-constructors": ["warn", "constructor"],
  "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
  "@typescript-eslint/consistent-type-assertions": "warn",
  "@typescript-eslint/consistent-type-definitions": "warn",
  "@typescript-eslint/no-duplicate-type-constituents": "warn",
  "@typescript-eslint/no-redundant-type-constituents": "warn",
  "@typescript-eslint/prefer-return-this-type": "warn",

  // ============================================
  // Code Consistency
  // ============================================
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "warn",
  "init-declarations": "off",
  "@typescript-eslint/init-declarations": "warn",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "warn",
  "prefer-promise-reject-errors": "off",
  "@typescript-eslint/prefer-promise-reject-errors": "warn",
  "no-magic-numbers": "off",
  "@typescript-eslint/prefer-readonly": "warn",
  "@typescript-eslint/prefer-string-starts-ends-with": "warn",
  "@typescript-eslint/promise-function-async": "warn",
  "@typescript-eslint/switch-exhaustiveness-check": "warn",
  "class-methods-use-this": "off",
  "@typescript-eslint/class-methods-use-this": "warn",
  "@typescript-eslint/no-magic-numbers": [
    "warn",
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
  "@typescript-eslint/default-param-last": "warn",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "warn",
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": "warn",
  "@typescript-eslint/consistent-type-exports": "warn",
  "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
  "@typescript-eslint/explicit-function-return-type": [
    "warn",
    { allowConciseArrowFunctionExpressionsStartingWithVoid: true },
  ],
  "@typescript-eslint/no-array-delete": "warn",
  "@typescript-eslint/method-signature-style": ["warn", "method"],
  "@typescript-eslint/prefer-regexp-exec": "off",
  "@typescript-eslint/no-meaningless-void-operator": "off",
  "@typescript-eslint/no-misused-promises": "warn",
  "@typescript-eslint/no-misused-spread": "warn",
  "@typescript-eslint/no-mixed-enums": "warn",
  "@typescript-eslint/no-unnecessary-condition": "warn",
  "@typescript-eslint/no-unnecessary-template-expression": "warn",
  "@typescript-eslint/explicit-member-accessibility": [
    "warn",
    { overrides: { constructors: "no-public" } },
  ],
}

export default vueRules
