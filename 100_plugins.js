/** @file Plugin imports and recommended configurations for ESLint. */
import js from "@eslint/js"
import prettierConfig from "eslint-config-prettier"
import * as importX from "eslint-plugin-import-x"
import jsdocPlugin from "eslint-plugin-jsdoc"
import eslintPluginUnicorn from "eslint-plugin-unicorn"

// Universal plugin recommended configurations
// These apply to all JavaScript/TypeScript files regardless of context
const pluginConfigs = [
  //  js.configs.recommended, // Core JavaScript rules

  {
    plugins: { jsdoc: jsdocPlugin, unicorn: eslintPluginUnicorn, "import-x": importX },
  },
]

export default pluginConfigs
