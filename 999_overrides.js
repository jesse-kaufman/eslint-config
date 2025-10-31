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
      "**/*.config.{js,ts}",
      "eslint/**/*.{js,ts}",
    ],
    rules: {
      // Config files can be long and have magic numbers
      "max-lines": "off",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "import/no-unresolved": [
        "error",
        {
          ignore: ["@typescript-eslint/"],
        },
      ],
    },
  },

  // ============================================
  // ESLint Example File Overrides
  // ============================================
  {
    name: "app/eslint-example-overrides",
    files: ["eslint-config/eslint.example.js"],
    rules: {
      "import/no-unresolved": [
        "error",
        {
          ignore: ["./eslint-config/index.js"],
        },
      ],
    },
  },

  // ============================================
  // Config Directory Overrides
  // ============================================
  {
    name: "app/config-dir-overrides",
    files: [
      "**/packages/**/src/config/*.{js,ts}",
      "**/packages/**/src/config/**/*.{js,ts}",
    ],
    rules: {
      // Config files often contain magic numbers for configuration values
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": "off",
    },
  },
]

export default overrideConfigs
