/** @file Project-specific ESLint configuration. */
import buildConfig from "./eslint-config/index.js"

// Copy this file to the project root and rename to eslint.config.js

// ============================================
// Workspace-Specific Configurations
// ============================================
// Import resolvers and path aliases for each workspace package

const workspaces = [
  // Backend workspace
  {
    name: "app/backend-workspace",
    files: ["packages/backend/**"],
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./packages/backend/tsconfig.json",
        },
        alias: {
          map: [
            ["#config/*", "./packages/backend/src/config"],
            ["#controllers/*", "./packages/backend/src/controllers/*"],
            ["#errors/*", "./packages/backend/src/errors/*"],
            ["#middlewares/*", "./packages/backend/src/middlewares/*"],
            ["#modules/*", "./packages/backend/src/modules/*"],
            ["#registries/*", "./packages/backend/src/registries/*"],
            ["#repositories/*", "./packages/backend/src/repositories/*"],
            ["#routes/*", "./packages/backend/src/routes/*"],
            ["#services/*", "./packages/backend/src/services/*"],
            ["#types", "./packages/backend/src/types"],
            ["#utils/*", "./packages/backend/src/utils/*"],
          ],
        },
      },
    },
  },

  // Shared workspace
  {
    name: "app/shared-workspace",
    files: ["packages/shared/**"],
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./packages/shared/tsconfig.json",
        },
        alias: {
          map: [
            ["#config/*", "./packages/shared/src/config/*"],
            ["#errors/*", "./packages/shared/src/errors/*"],
            ["#fields/*", "./packages/shared/src/fields/*"],
            ["#fields", "./packages/shared/src/fields/index.js"],
            ["#utils/*", "./packages/shared/src/utils/*"],
            ["#validation*/", "./packages/shared/src/validation/*"],
          ],
        },
      },
    },
  },

  // Config workspace
  {
    name: "app/config-workspace",
    files: ["packages/config/**"],
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./packages/config/tsconfig.json",
        },
      },
    },
  },

  // Frontend workspace
  {
    name: "app/frontend-workspace",
    files: ["packages/frontend/**/*"],
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./packages/frontend/tsconfig.json",
        },
        alias: {
          map: [
            ["#App/*", "./packages/frontend/src/components/App/*"],
            ["#Base/*", "./packages/frontend/src/components/Base/*"],
            ["#composables/*", "./packages/frontend/src/composables/*"],
            ["#config/*", "./packages/frontend/src/config/*"],
            ["#layouts/*", "./packages/frontend/src/layouts/*"],
            ["#Projects/*", "./packages/frontend/src/components/Projects/*"],
            ["#services/*", "./packages/frontend/src/services/*"],
            ["#stores/*", "./packages/frontend/src/stores/*"],
            ["#types", "./packages/frontend/src/types"],
            ["#UI/*", "./packages/frontend/src/components/UI/*"],
            ["#utils/*", "./packages/frontend/src/utils/*"],
            ["#views/*", "./packages/frontend/src/views/*"],
          ],
        },
      },
    },
  },
]

// Build and export the complete ESLint configuration
const config = buildConfig(workspaces)

export default config
