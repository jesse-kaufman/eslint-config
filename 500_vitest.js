/** @file Vitest rules. */
import pluginVitest from "@vitest/eslint-plugin"

const vitestConfigs = [
  // ============================================
  // Test File Recommended Configuration
  // ============================================
  // Apply Vitest recommended rules to test files only
  {
    ...pluginVitest.configs.recommended,
    files: ["**/*.test.{js,ts}", "**/__tests__/**"],
    rules: {
      // Tests often need longer functions and magic numbers for test data
      "max-lines-per-function": "off",
      "no-magic-numbers": "off",

      // Vitest-specific best practices
      "vitest/consistent-test-it": ["warn"],
      "vitest/max-nested-describe": ["warn", { max: 3 }],
      "vitest/no-alias-methods": ["warn"],
      "vitest/no-conditional-expect": ["warn"],
      "vitest/no-conditional-in-test": ["warn"],
      "vitest/no-conditional-tests": ["warn"],
      "vitest/no-duplicate-hooks": ["warn"],
      "vitest/no-standalone-expect": ["warn"],
      "vitest/no-test-prefixes": ["warn"],
      "vitest/no-test-return-statement": ["warn"],

      // Vitest spacing and organization
      "vitest/padding-around-after-all-blocks": ["warn"],
      "vitest/padding-around-after-each-blocks": ["warn"],
      "vitest/padding-around-before-all-blocks": ["warn"],
      "vitest/padding-around-before-each-blocks": ["warn"],
      "vitest/padding-around-describe-blocks": ["warn"],
      "vitest/padding-around-test-blocks": ["warn"],

      // Vitest matchers and assertions
      "vitest/prefer-called-once": ["warn"],
      "vitest/prefer-comparison-matcher": ["warn"],
      "vitest/prefer-describe-function-title": ["warn"],
      "vitest/prefer-each": ["warn"],
      "vitest/prefer-equality-matcher": ["warn"],
      "vitest/prefer-expect-resolves": ["warn"],
      "vitest/prefer-hooks-in-order": ["warn"],
      "vitest/prefer-hooks-on-top": ["warn"],
      "vitest/prefer-importing-vitest-globals": ["warn"],
      "vitest/prefer-mock-promise-shorthand": ["warn"],
      "vitest/prefer-strict-equal": ["warn"],
      "vitest/prefer-to-be-object": ["warn"],
      "vitest/prefer-strict-boolean-matchers": ["warn"],
      "vitest/prefer-to-be": ["warn"],
      "vitest/prefer-to-contain": ["warn"],
      "vitest/prefer-to-have-length": ["warn"],

      // Vitest structure
      "vitest/require-top-level-describe": ["warn"],
      "vitest/valid-title": ["warn", { allowArguments: true }],
      "vitest/valid-describe-callback": ["warn"],
      "vitest/valid-expect": ["warn"],
      "vitest/valid-expect-in-promise": ["warn"],
      "vitest/require-hook": ["warn"],
    }
  },

  // ============================================
  // Component Test File Overrides
  // ============================================
  {
    name: "app/component-test-overrides",
    files: ["**/__tests__/**/components/**/*.{js,ts}"],
    rules: {
      // Component tests often use the component name as the describe title
      "vitest/prefer-describe-function-title": "off",
    },
  },

  // ============================================
  // Vite/Vitest Config File Overrides
  // ============================================
  {
    name: "app/vite-and-vitest-overrides",
    files: ["**/vite.config.{js,ts}", "**/vitest.config.{js,ts}"],
    rules: {
      // Vite/Vitest configs often have import issues that should be ignored
      "import/namespace": "off",
      "import/default": "off",
      "import/no-unresolved": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-duplicates": "off",
      "import/no-cycle": "off",
    },
  },
]

export default vitestConfigs
