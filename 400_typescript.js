/** @file TypeScript-specific ESLint configuration with type-checking. */
import path from "node:path"
import { tseslint, tsParser } from "./100_plugins.js"

// Get project root directory (parent of eslint directory)
const projectRoot = path.dirname(import.meta.dirname)

// Shared TypeScript rules used by both .ts and .vue files
// This prevents duplication of rules between typescript and vue configs
const sharedTypeScriptRules = {
  // Spread in TypeScript ESLint strict and stylistic type-checked rules
  ...tseslint.configs.strict.rules,
  ...tseslint.configs.stylisticTypeChecked,

  // Note: JSDoc rules are handled by eslint/jsdoc.js, not here
  // This prevents the TypeScript preset from overwriting custom JSDoc rules

  // ============================================
  // Type Inference Rules
  // ============================================
  "@typescript-eslint/no-inferrable-types": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/no-unnecessary-type-arguments": "warn",
  "@typescript-eslint/no-unnecessary-type-constraint": "warn",

  // ============================================
  // Modern JavaScript/TypeScript Patterns
  // ============================================
  "@typescript-eslint/prefer-nullish-coalescing": [
    "warn",
    { ignoreConditionalTests: true, ignoreBooleanCoercion: true },
  ],
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/no-import-type-side-effects": "error",

  // ============================================
  // Type Safety
  // ============================================
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/consistent-type-imports": [
    "warn",
    { prefer: "type-imports" },
  ],
}

const typeScriptConfig = [
  // TypeScript configuration with type-checking
  // Applies to all .ts files across the monorepo
  {
    name: "app/typescript-config",
    files: [
      "scripts/*.ts",
      "packages/backend/**/*.ts",
      "packages/shared/**/*.ts",
      "packages/frontend/**/*.ts",
      "packages/config/**/*.ts",
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./packages/*/tsconfig.json", "./scripts/tsconfig.json"],
        tsconfigRootDir: projectRoot,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: sharedTypeScriptRules,
  },
]

// Export both the config and the shared rules for use in vue.js
export { sharedTypeScriptRules }
export default typeScriptConfig
