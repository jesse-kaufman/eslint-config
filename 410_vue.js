/** @file Vue-specific ESLint configuration with TypeScript support. */
import path from "node:path"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import vue from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"
import { sharedTypeScriptRules } from "./400_typescript.js"

// Get project root directory (parent of eslint directory)
const projectRoot = path.dirname(import.meta.dirname)

const vueConfig = [
  // Vue recommended configurations (must come before custom config)
  ...vue.configs["flat/recommended"],

  // Vue + TypeScript configuration
  // Uses vue-eslint-parser with TypeScript parser for <script> blocks
  {
    name: "app/vue-typescript-config",
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
        project: ["./packages/*/tsconfig.json", "./scripts/tsconfig.json"],
        tsconfigRootDir: projectRoot,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      vue,
    },
    rules: {
      // Inherit shared TypeScript rules to avoid duplication
      ...sharedTypeScriptRules,

      // ============================================
      // Vue Language Features
      // ============================================
      "vue/block-lang": ["error", { script: { lang: "ts" } }],

      // ============================================
      // Vue Component Structure & Organization
      // ============================================
      "vue/define-macros-order": [
        "warn",
        {
          order: ["defineOptions", "defineEmits", "defineModel", "defineProps"],
          defineExposeLast: true,
        },
      ],
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/component-name-in-template-casing": [
        "warn",
        "PascalCase",
        {
          registeredComponentsOnly: false,
        },
      ],

      // ============================================
      // Vue Template Safety
      // ============================================
      "vue/no-v-html": "error",
      "vue/no-v-text": ["error"],
      "vue/no-template-target-blank": ["error"],
      "vue/no-this-in-before-route-enter": ["error"],
      "vue/no-root-v-if": ["error"],

      // ============================================
      // Vue Template Best Practices
      // ============================================
      "vue/v-on-event-hyphenation": ["warn", "never", { autofix: true }],
      "vue/next-tick-style": ["warn", "promise"],
      "vue/no-useless-mustaches": ["warn"],
      "vue/no-useless-v-bind": ["warn"],
      "vue/no-negated-v-if-condition": ["warn"],
      "vue/no-ref-object-reactivity-loss": ["warn"],
      "vue/prefer-use-template-ref": ["warn"],
      "vue/prefer-true-attribute-shorthand": ["warn"],
      "vue/prefer-separate-static-class": ["warn"],

      // ============================================
      // Vue Component Validation
      // ============================================
      "vue/match-component-file-name": [
        "error",
        { extensions: ["vue"], shouldMatchCase: true },
      ],
      "vue/match-component-import-name": ["error"],
      "vue/no-undef-properties": ["error"],
      "vue/no-undef-components": [
        "error",
        { ignorePatterns: ["RouterLink", "RouterView"] },
      ],
      "vue/no-unused-properties": ["warn"],
      "vue/no-unused-refs": ["warn"],
      "vue/no-unused-emit-declarations": ["warn"],
      "vue/no-duplicate-attr-inheritance": [
        "error",
        { checkMultiRootNodes: true },
      ],
      "vue/no-import-compiler-macros": ["error"],

      // ============================================
      // Vue Props & Events
      // ============================================
      "vue/prop-name-casing": ["error", "camelCase"],
      "vue/prefer-prop-type-boolean-first": ["warn"],
      "vue/custom-event-name-casing": ["warn", "camelCase"],

      // ============================================
      // Vue Template Formatting
      // ============================================
      "vue/html-indent": 0,
      "vue/max-attributes-per-line": "off",
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

      // ============================================
      // Vue Style & Static Content
      // ============================================
      "vue/enforce-style-attribute": ["error", { allow: ["scoped"] }],
      "vue/no-multiple-objects-in-class": ["warn"],
      "vue/no-static-inline-styles": ["error"],

      // ============================================
      // Vue Template Spacing
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
      // Vue Async Operations
      // ============================================
      "vue/no-restricted-call-after-await": ["warn"],
    },
  },

  // Frontend-specific Vue overrides
  {
    name: "app/frontend-vue-overrides",
    files: ["packages/frontend/**/*.{js,ts,vue}"],
    rules: {
      // These rules are specifically for the frontend package
      // They were in the original config but seem frontend-specific
    },
  },

  // General Vue file overrides
  {
    name: "app/vue-overrides",
    files: ["**/*.vue"],
    rules: {
      // Vue files don't need file-level JSDoc comments
      "jsdoc/require-file-overview": "off",
    },
  },
]

export default vueConfig
