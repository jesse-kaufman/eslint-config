/** @file Plugin imports and recommended configurations for ESLint. */
import js from "@eslint/js"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import importPlugin from "eslint-plugin-import"
import jsdoc from "eslint-plugin-jsdoc"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import tseslint from "typescript-eslint"

const tsParser = tseslint.parser

// Universal plugin recommended configurations
// These apply to all JavaScript/TypeScript files regardless of context
const pluginConfigs = [
  js.configs.recommended, // Core JavaScript rules
  importPlugin.flatConfigs.recommended, // Import/export rules for all files
  eslintPluginUnicorn.configs.recommended,
  skipFormatting, // Prettier conflict prevention
  {
    plugins: { jsdoc },
  },
]

export { pluginConfigs, tsParser }
export { default as eslintPluginPrettier } from "eslint-plugin-prettier"
export { default as stylistic } from "@stylistic/eslint-plugin"
export { default as globals } from "globals"
export { default as tseslint } from "typescript-eslint"
export { default as jsdoc } from "eslint-plugin-jsdoc"
