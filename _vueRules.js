/** @file Vue-specific ESLint configuration with TypeScript support. */

import sharedTypeScriptRules from "./_typescriptRules.js"

const vueRules = {
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
  "vue/no-required-prop-with-default": "off",

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

  
}

export default vueRules
