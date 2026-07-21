/** @file Base ESLint configuration with language-agnostic rules. */
import stylistic from "@stylistic/eslint-plugin"
import globals from "globals"

const baseConfig = [
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
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // ============================================
      // Code Style & Formatting
      // ============================================
      "unicorn/comment-content": "off",
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
      "id-denylist": ["error", "e"], // Disallow 'e' as variable name

      // ============================================
      // Import Plugin Rules
      // ============================================
      //"import-x/enforce-node-protocol-usage": ["warn", "always"],
      "import-x/no-useless-path-segments": "warn",

      // ============================================
      // Unicorn Plugin Rules
      // ============================================
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          checkDirectories: false,
        },
      ],
      "unicorn/consistent-destructuring": "error",
      "unicorn/better-regex": "warn", // Deprecated
      "unicorn/no-unused-properties": "warn",
      "unicorn/prefer-json-parse-buffer": "warn",
    },
  },
]

export default baseConfig
