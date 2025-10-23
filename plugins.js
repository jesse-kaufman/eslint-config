/** @file Plugin imports and recommended configurations for ESLint. */
import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import importPlugin from "eslint-plugin-import"
import jsdoc from "eslint-plugin-jsdoc"
import eslintPluginPrettier from "eslint-plugin-prettier"
import globals from "globals"

// Universal plugin recommended configurations
// These apply to all JavaScript/TypeScript files regardless of context
const pluginConfigs = [
  js.configs.recommended, // Core JavaScript rules
  importPlugin.flatConfigs.recommended, // Import/export rules for all files
  skipFormatting, // Prettier conflict prevention
  {
    plugins: { jsdoc },
  },
]

export {
  eslintPluginPrettier,
  globals,
  jsdoc,
  pluginConfigs,
  stylistic,
  tseslint,
  tsParser,
}
