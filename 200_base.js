/** @file Base ESLint configuration with language-agnostic rules. */
import { eslintPluginPrettier, globals, stylistic } from "./100_plugins.js"

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

  // Base configuration for all JavaScript/TypeScript/Vue files
  {
    name: "app/base-config",
    files: ["**/*.{js,vue,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "@stylistic": stylistic,
    },
    rules: {
      // ============================================
      // Code Style & Formatting
      // ============================================
      "eol-last": ["warn", "always"],
      "@stylistic/max-len": [
        "warn",
        {
          code: 120,
          comments: 120,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "comma-dangle": ["error", "only-multiline"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "prettier/prettier": "warn",
      "@stylistic/semi": ["warn", "never"],
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      "prefer-regex-literals": "error",

      // ============================================
      // Code Quality & Best Practices
      // ============================================
      "no-script-url": "error",
      "array-callback-return": ["error", { checkForEach: true }],
      "arrow-body-style": [
        "warn",
        "as-needed",
        { requireReturnForObjectLiteral: false },
      ],
      "logical-assignment-operators": [
        "warn",
        "always",
        { enforceForIfStatements: true },
      ],
      "max-classes-per-file": "error",
      "symbol-description": "warn",
      "no-promise-executor-return": "error",
      complexity: ["warn", { max: 10 }],
      curly: ["error", "multi-line", "consistent"],
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      eqeqeq: ["error", "smart"],
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "init-declarations": ["error", "always"],
      "max-depth": "error",
      "max-nested-callbacks": ["error", 5],
      "new-cap": ["error", { capIsNewExceptions: ["Router"] }],
      "no-await-in-loop": "error",
      "no-duplicate-imports": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-empty-function": "warn",
      "no-extra-label": "error",
      "no-implied-eval": "error",
      "no-iterator": "error",
      "no-implicit-coercion": "error",
      "no-inner-declarations": "error",
      "no-extra-bind": "error",
      "no-invalid-this": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-negated-condition": "warn",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": ["error", { allowInParentheses: false }],
      "no-shadow": "warn",
      "no-template-curly-in-string": "error",
      "no-undef-init": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],
      "no-unreachable-loop": "error",
      "no-unused-expressions": "warn",
      "no-useless-computed-key": "error",
      "no-unused-vars": "warn",
      "no-use-before-define": [
        "warn",
        {
          allowNamedExports: true,
          classes: true,
          functions: false,
          variables: true,
        },
      ],
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "require-atomic-updates": "warn",
      "require-await": "error",
      "sort-vars": "error",
      "valid-typeof": "error",
      "vars-on-top": "error",

      // ============================================
      // Naming Conventions
      // ============================================
      camelcase: ["warn", { ignoreImports: true }],
      "capitalized-comments": [
        "warn",
        "always",
        {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: "prettier",
        },
      ],
      "id-denylist": ["error", "e"], // Disallow 'e' as variable name

      // ============================================
      // Function & Code Organization
      // ============================================
      "func-names": ["error", "as-needed"],
      "func-style": ["error", "expression"],
      "max-lines": [
        "warn",
        {
          max: 250,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "func-name-matching": "error",
      "max-lines-per-function": ["warn", { max: 40, skipBlankLines: true }],
      "max-params": ["error", 5],
      "max-statements": ["warn", 20],

      // ============================================
      // Magic Numbers & Literals
      // ============================================
      "no-magic-numbers": [
        "warn",
        {
          ignoreArrayIndexes: true,
          ignore: [-1, 0, 1, 2, 100],
          enforceConst: true,
        },
      ],

      // ============================================
      // Modern JavaScript Patterns
      // ============================================
      "object-shorthand": [
        "error",
        "always",
        {
          avoidQuotes: true,
          avoidExplicitReturnArrows: false,
        },
      ],
      "operator-assignment": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        {
          object: true,
        },
      ],
      "prefer-numeric-literals": "error",
      "prefer-object-has-own": "warn",
      "prefer-object-spread": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "preserve-caught-error": [
        "error",
        {
          requireCatchParameter: true,
        },
      ],

      // ============================================
      // Import Plugin Rules
      // ============================================
      "import/enforce-node-protocol-usage": ["warn", "always"],
      "import/exports-last": "warn",
      "import/extensions": [
        "warn",
        "ignorePackages",
        {
          js: "never",
          ts: "never",
          vue: "always",
        },
      ],
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-absolute-path": "warn",
      "import/no-anonymous-default-export": [
        "error",
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true,
          allowNew: false,
          allowLiteral: false,
          allowObject: true,
        },
      ],
      "import/no-cycle": "warn",
      "import/no-mutable-exports": "warn",
      "import/no-useless-path-segments": "warn",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          named: {
            types: "types-first",
            enabled: true,
          },
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "never",
          warnOnUnassignedImports: true,
        },
      ],
      "import/prefer-default-export": "warn",
    },
  },
]

export default baseConfig
