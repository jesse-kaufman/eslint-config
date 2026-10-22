/** @file Main entry point for shared ESLint configurations. */

import path from "node:path"
import js from "@eslint/js"
import * as importX from "eslint-plugin-import-x"
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
      "**/src/api/schema.ts",
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
      // Import Plugin Rules
      // ============================================
      "import-x/no-useless-path-segments": "warn",
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
  ...vue.configs["flat/recommended"],
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
