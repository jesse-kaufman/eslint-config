/** @file Specialized overrides for specific file types and contexts. */

const overrideConfigs = [
  // ============================================
  // Tooling Config File Overrides
  // ============================================
  {
    name: "app/tooling-config-overrides",
    files: ["**/*.config.js", "eslint/**/*.js"],
    rules: {
      // Config files can be long and have magic numbers
      "max-lines": "off",
      "no-magic-numbers": "off",
      "import/no-unresolved": [
        "error",
        {
          ignore: ["@typescript-eslint/"],
        },
      ],
    },
  },

  // ============================================
  // Config Directory Overrides
  // ============================================
  {
    name: "app/config-dir-overrides",
    files: ["**/packages/*/config/*.{js,ts}", "**/packages/*/config/**/*.{js,ts}"],
    rules: {
      // Config files often contain magic numbers for configuration values
      "no-magic-numbers": "off",
    },
  },
]

export default overrideConfigs
