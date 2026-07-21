/** @file Main entry point for shared ESLint configurations. */

import path from "node:path"
import js from "@eslint/js"
import * as importX from "eslint-plugin-import-x"
import jsdocPlugin from "eslint-plugin-jsdoc"
import oxlint from "eslint-plugin-oxlint"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import vue from "eslint-plugin-vue"
import globals from "globals"
import tseslint from "typescript-eslint"
import { parser as tsParser, plugin as tsPlugin } from "typescript-eslint"
import vueParser from "vue-eslint-parser"
import sharedTypeScriptRules from "./_typescriptRules.js"
import vueRules from "./_vueRules.js"

const projectRoot = path.dirname(import.meta.dirname)

/**
 * Builds a complete ESLint configuration by combining shared configs with project-specific
 * workspace configs.
 *
 * @example
 *   const workspaces = [
 *   { name: "app/backend-workspace", files: ["packages/backend/**"], settings: {...} },
 *   { name: "app/frontend-workspace", files: ["packages/frontend/**"], settings: {...} },
 *   ]
 *   const config = buildConfig(workspaces)
 *   export default config
 *
 * @param {Array} workspaces Array of workspace-specific configuration objects
 *   (import resolvers, etc.).
 * @returns {Array} Complete ESLint configuration array.
 */
const buildConfig = (workspaces = []) => [
  // ------------------------------------------------------
  // 1. Plugin recommended configurations (must come first)
  // ------------------------------------------------------
  {
    plugins: {
      jsdoc: jsdocPlugin,
      unicorn: eslintPluginUnicorn,
      "import-x": importX,
      "@typescript-eslint": tsPlugin,
    },
  },

  // ------------------------------------------------------
  // 2. Base configuration (applies to all files)
  // ------------------------------------------------------

  // Global ignores - files/directories that ESLint should completely ignore
  {
    name: "app/global-ignores",
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/dist-ssr/**",
      "**/coverage/**",
      "**/migrations/**",
    ],
  },
  // Base configuration for all JavaScript/TypeScript/Vue.js files
  {
    name: "app/base-config",
    files: ["**/*.{js,vue,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // ============================================
      // Code Style & Formatting
      // ============================================
      "unicorn/comment-content": "off", // Enable this later
      "unicorn/no-unreadable-new-expression": "off",
      "unicorn/prefer-short-arrow-method": "warn",
      "unicorn/consistent-class-member-order": "off",
      "unicorn/prefer-switch": ["warn", { minimumCases: 5 }],
      "unicorn/no-return-array-push": "off",
      "unicorn/consistent-boolean-name": [
        "warn",
        {
          prefixes: {
            required: true,
            nullable: true,
            show: true,
            hide: true,
            include: true,
            use: true,
            matches: true,
            allow: true,
            prevent: true,
            enable: true,
            disable: true,
          },
        },
      ],
      "unicorn/prefer-minimal-ternary": "off",
      "unicorn/default-export-style": ["warn", { functions: "separate" }],

      // ============================================
      // Code Quality & Best Practices
      // ============================================
      "require-atomic-updates": "warn",

      // ============================================
      // Naming Conventions
      // ============================================
      "unicorn/name-replacements": "off", // Disable for now
      "id-denylist": ["warn", "e"], // Disallow 'e' as variable name

      // ============================================
      // Import Plugin Rules
      // ============================================
      "import-x/no-useless-path-segments": "warn",

      // ============================================
      // Unicorn Plugin Rules
      // ============================================
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          checkDirectories: false,
        },
      ],
      "unicorn/consistent-destructuring": "warn",
      "unicorn/better-regex": "warn", // Deprecated
      "unicorn/no-unused-properties": "warn",
      "unicorn/prefer-json-parse-buffer": "warn",
    },
  },

  // ------------------------------------------------------
  // 3. JSDoc configuration (applies to JS/TS files)
  // ------------------------------------------------------
  {
    name: "app/jsdoc-config",
    files: ["**/*.{js,ts,vue}"],
    rules: {
      // ============================================
      // JSDoc Rules
      // ============================================
      "jsdoc/informative-docs": "warn",
      "jsdoc/require-hyphen-before-param-description": ["warn", "never"],
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

  // ------------------------------------------------------
  // 4. Language-specific configurations
  // ------------------------------------------------------

  // TypeScript configuration
  {
    name: "app/typescript-config",
    files: ["*.ts", "**/*.ts"],

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

  ...oxlint.configs["flat/recommended"], // Disable eslint rules that oxlint already covers

  // JavaScript configuration without type-checking
  // This applies to remaining .js files like test files and config files
  // Note: As you convert files to TypeScript, they will automatically use
  // the TypeScript config instead since it matches .ts files first
  {
    name: "app/javascript-config",
    files: ["*.js", "**/*.js"],
    rules: {
      ...js.configs.recommended.rules, // Core JavaScript rules

      "jsdoc/prefer-import-tag": ["warn", { enableFixer: false }],
      "jsdoc/check-types": "warn",
      "jsdoc/check-values": "warn",
      "jsdoc/tag-lines": "off",
      "no-unused-vars": "warn",

      // Require .js extensions for ESM imports in JavaScript files
      "import-x/extensions": [
        "warn",
        "ignorePackages",
        {
          js: "always",
          ts: "never",
          vue: "always",
        },
      ],
    },
  },

  // + TypeScript configuration
  // Uses vue-eslint-parser with TypeScript parser for <script> blocks
  {
    name: "app/vue-typescript-config",
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        projectService: "./frontend/tsconfig.json",
        extraFileExtensions: [".vue"],
        tsconfigRootDir: projectRoot,
      },
    },
    plugins: { vue },
    rules: vueRules,
  },

  // 5. Workspace-specific configurations (provided by project)
  ...workspaces,

  // 6. Specialized overrides (most specific, should come last)

  // ============================================
  // ESLint Config File Overrides
  // ============================================
  {
    name: "app/eslint-config",
    files: ["eslint-config/*", ".eslint-config/*"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
]

export default buildConfig
