/** @file Plugin imports and recommended configurations for ESLint. */
import js from "@eslint/js"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import { flatConfigs } from "eslint-plugin-import-x"
import jsdocPlugin from "eslint-plugin-jsdoc"
import eslintPluginUnicorn from "eslint-plugin-unicorn"

// Universal plugin recommended configurations
// These apply to all JavaScript/TypeScript files regardless of context
const pluginConfigs = [
  js.configs.recommended, // Core JavaScript rules
  flatConfigs.recommended, // Import/export rules for all files
  flatConfigs.typescript,
  eslintPluginUnicorn.configs.recommended,
  skipFormatting, // Prettier conflict prevention
  {
    plugins: { jsdoc: jsdocPlugin },
  },
]

export default pluginConfigs
