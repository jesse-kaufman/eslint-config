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
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./packages/backend/tsconfig.json",
        },
      },
    },
  },

  // Shared workspace
  {
    name: "app/shared-workspace",
    files: ["packages/shared/**"],
    settings: {
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./packages/shared/tsconfig.json",
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
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./packages/frontend/tsconfig.json",
        },
      },
    },
  },
]

// Build and export the complete ESLint configuration
const config = buildConfig(workspaces)

export default config
