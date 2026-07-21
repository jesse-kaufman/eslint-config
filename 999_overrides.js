/** @file Specialized overrides for specific file types and contexts. */

const overrideConfigs = [
  // ============================================
  // Tooling Config File Overrides
  // ============================================
  {
    name: "app/tooling-config-overrides",
    files: [
      "eslint.config.{js,ts}",
      "eslint-config/*",
      ".eslint-config/*",
      "**/*.config.{js,ts}",
      "eslint/**/*.{js,ts}",
      ".eslint/**/*.{js,ts}",
      ".*.js",
      "**/__tests__/**/*.{js,ts}",
    ],
    rules: {},
  },

  // ============================================
  // ESLint Example File Overrides
  // ============================================
  {
    name: "app/eslint-example-overrides",
    files: ["eslint-config/eslint.example.js", ".eslint-config/eslint.example.js"],
    rules: {},
  },

  // ============================================
  // ESLint Config File Overrides
  // ============================================
  {
    name: "app/eslint-config-overrides",
    files: ["eslint-config/*", ".eslint-config/*"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },

  // ============================================
  // Config Directory Overrides
  // ============================================
  {
    name: "app/config-dir-overrides",
    files: [
      "**/src/config/*.{js,ts}",
      "**/src/config/**/*.{js,ts}",
      "**/scripts/**/config/**/*.{js,ts}",
      "**/scripts/**/config.{js,ts}",
      "**/src/features/**/config.{js,ts}",
    ],
    rules: {},
  },
]

export default overrideConfigs
