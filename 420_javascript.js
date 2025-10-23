/** @file Legacy JavaScript support for remaining .js files (tests, configs, etc.). */

const javaScriptConfig = [
  // JavaScript configuration without type-checking
  // This applies to remaining .js files like test files and config files
  // Note: As you convert files to TypeScript, they will automatically use
  // the TypeScript config instead since it matches .ts files first
  {
    name: "app/javascript-config",
    files: ["*.js", "**/*.js"],

    // No special parser needed - uses default ESLint parser for JavaScript
    // No TypeScript rules - just relies on base config rules
    rules: {
      // Require .js extensions for ESM imports in JavaScript files
      // This is needed for Node.js ESM compatibility
      "import/extensions": [
        "warn",
        "ignorePackages",
        {
          js: "always",
          ts: "never",
          vue: "always",
        },
      ],
    },
  },
]

export default javaScriptConfig
