/** @file Main entry point for shared ESLint configurations. */

import baseConfig from "./base.js"
import javaScriptConfig from "./javascript.js"
import jsdocConfig from "./jsdoc.js"
import overrideConfigs from "./overrides.js"
import { pluginConfigs } from "./plugins.js"
import typeScriptConfig from "./typescript.js"
import vueConfig from "./vue.js"

/**
 * Builds a complete ESLint configuration by combining shared configs with project-specific workspace configs.
 * @param {Array} workspaces - Array of workspace-specific configuration objects (import resolvers, etc.).
 * @returns {Array} Complete ESLint configuration array.
 * @example
 * const workspaces = [
 *   { name: "app/backend-workspace", files: ["packages/backend/**"], settings: {...} },
 *   { name: "app/frontend-workspace", files: ["packages/frontend/**"], settings: {...} },
 * ]
 * const config = buildConfig(workspaces)
 * export default config
 */
function buildConfig(workspaces = []) {
  return [
    // 1. Plugin recommended configurations (must come first)
    ...pluginConfigs,

    // 2. Base configuration (applies to all files)
    ...baseConfig,

    // 3. JSDoc configuration (applies to JS/TS files)
    ...jsdocConfig,

    // 4. Language-specific configurations
    ...typeScriptConfig, // TypeScript files (.ts)
    ...vueConfig, // Vue files (.vue) with TypeScript
    ...javaScriptConfig, // Legacy JavaScript files (.js)

    // 5. Workspace-specific configurations (provided by project)
    ...workspaces,

    // 6. Specialized overrides (most specific, should come last)
    ...overrideConfigs,
  ]
}

export default buildConfig
