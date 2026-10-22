/** @file TypeScript-specific ESLint configuration with type-checking. */

// Shared TypeScript rules used by Vue.js files
// This prevents duplication of rules between TypeScript and Vue.js configs
const sharedTypeScriptRules = {
  "no-restricted-imports": [
    "warn",
    {
      patterns: [
        {
          regex: "^\\.\\.?/.*\\.js$",
          message: "Omit the .js extension on relative imports.",
        },
      ],
    },
  ],

  // ============================================
  // Code Consistency
  // ============================================
  "import-x/no-unresolved": "off",
  "import-x/namespace": "off",
  "import-x/default": "off",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "warn",

  // ============================================
  // Type Inference Rules
  // ============================================
  "@typescript-eslint/no-inferrable-types": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/no-unnecessary-type-arguments": "warn",

  // ============================================
  // Type Safety
  // ============================================
  "@typescript-eslint/no-unnecessary-type-conversion": "warn",
  "@typescript-eslint/no-unsafe-argument": "off",
  //"@typescript-eslint/no-unsafe-member-access": ["warn", { allowOptionalChaining: true }],
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-confusing-void-expression": [
    "warn",
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
      ignoreVoidReturningFunctions: true,
    },
  ],
  "@typescript-eslint/prefer-reduce-type-parameter": "warn",
  "@typescript-eslint/restrict-template-expressions": [
    "warn",
    { allowNumber: true, allowBoolean: true },
  ],

  // ============================================
  // Modern JavaScript/TypeScript Patterns
  // ============================================
  "@typescript-eslint/prefer-nullish-coalescing": [
    "warn",
    { ignoreConditionalTests: true, ignoreBooleanCoercion: true },
  ],
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/no-import-type-side-effects": "warn",
  "@typescript-eslint/no-for-in-array": "warn",
  "@typescript-eslint/prefer-for-of": "warn",

  // ============================================
  // Type Definition Consistency
  // ============================================
  "@typescript-eslint/array-type": ["warn", { default: "array" }],
  "@typescript-eslint/consistent-generic-constructors": ["warn", "constructor"],
  "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
  "@typescript-eslint/consistent-type-assertions": "warn",
  "@typescript-eslint/consistent-type-definitions": "warn",
  "@typescript-eslint/no-duplicate-type-constituents": "warn",
  "@typescript-eslint/no-redundant-type-constituents": "warn",
  "@typescript-eslint/prefer-return-this-type": "warn",

  // ============================================
  // Code Consistency
  // ============================================
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "warn",
  "init-declarations": "off",
  "@typescript-eslint/init-declarations": "warn",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "warn",
  "prefer-promise-reject-errors": "off",
  "@typescript-eslint/prefer-promise-reject-errors": "warn",
  "no-magic-numbers": "off",
  "@typescript-eslint/prefer-readonly": "warn",
  "@typescript-eslint/prefer-string-starts-ends-with": "warn",
  "@typescript-eslint/promise-function-async": "warn",
  "@typescript-eslint/switch-exhaustiveness-check": "warn",
  "class-methods-use-this": "off",
  "@typescript-eslint/no-base-to-string": "warn",
  "@typescript-eslint/class-methods-use-this": "warn",
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "warn",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "warn",
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": "warn",
  "@typescript-eslint/consistent-type-exports": "warn",
  "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
  "@typescript-eslint/explicit-function-return-type": [
    "warn",
    { allowConciseArrowFunctionExpressionsStartingWithVoid: true },
  ],
  "@typescript-eslint/no-array-delete": "warn",
  "@typescript-eslint/method-signature-style": ["warn", "method"],
  "@typescript-eslint/prefer-regexp-exec": "off",
  "@typescript-eslint/no-meaningless-void-operator": "off",
  "@typescript-eslint/no-misused-promises": "warn",
  "@typescript-eslint/no-misused-spread": "warn",
  "@typescript-eslint/no-mixed-enums": "warn",
  "@typescript-eslint/no-unnecessary-condition": "warn",
  "@typescript-eslint/no-unnecessary-template-expression": "warn",
  "@typescript-eslint/explicit-member-accessibility": [
    "warn",
    { overrides: { constructors: "no-public" } },
  ],

  // ============================================
  // Code Style & Formatting
  // ============================================
  "unicorn/no-incorrect-template-string-interpolation": ["warn"],
  "unicorn/comment-content": "off", // Enable this later
  "unicorn/no-unreadable-new-expression": "off",
  "unicorn/prefer-short-arrow-method": "warn",
  "unicorn/consistent-class-member-order": "off",
  "unicorn/prefer-switch": ["warn", { minimumCases: 5 }],
  "unicorn/no-return-array-push": "off",
  "unicorn/iteration-fallback-style": ["warn", "fallback"],
  "unicorn/consistent-boolean-name": [
    "warn",
    {
      checkMethods: "always",
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
  "unicorn/prefer-minimal-ternary": ["warn", { checkVaryingBase: false }],
  "unicorn/default-export-style": ["warn", { functions: "separate" }],
  "unicorn/prefer-simple-condition-first": "warn",
  "unicorn/single-line-block-comment-style": ["warn", "single-line"],
  "import-x/extensions": [
    "warn",
    "ignorePackages",
    {
      js: "never",
      ts: "never",
      vue: "always",
    },
  ],

  // ============================================
  // Naming Conventions
  // ============================================
  "unicorn/name-replacements": "off", // Disable for now

  // ============================================
  // Unicorn Plugin Rules
  // ============================================
  "unicorn/prevent-abbreviations": "off",
  "unicorn/filename-case": [
    "warn",
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
      checkDirectories: false,
    },
  ],
  "unicorn/consistent-destructuring": "warn",
  "unicorn/better-regex": "warn", // Deprecated
  "unicorn/no-unused-properties": "warn",
  "unicorn/prefer-json-parse-buffer": "warn",

  // ============================================
  // Code Consistency
  // ============================================

  "@typescript-eslint/member-ordering": [
    "warn",
    {
      default: {
        memberTypes: [
          // Index signature
          "signature",
          "call-signature",

          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "#private-static-field",

          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "#private-instance-field",

          "public-abstract-field",
          "protected-abstract-field",

          "public-field",
          "protected-field",
          "private-field",
          "#private-field",

          "static-field",
          "instance-field",
          "abstract-field",

          "decorated-field",

          "field",

          // Static initialization
          "static-initialization",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Accessors
          "public-static-accessor",
          "protected-static-accessor",
          "private-static-accessor",
          "#private-static-accessor",

          "public-decorated-accessor",
          "protected-decorated-accessor",
          "private-decorated-accessor",

          "public-instance-accessor",
          "protected-instance-accessor",
          "private-instance-accessor",
          "#private-instance-accessor",

          "public-abstract-accessor",
          "protected-abstract-accessor",

          "public-accessor",
          "protected-accessor",
          "private-accessor",
          "#private-accessor",

          "static-accessor",
          "instance-accessor",
          "abstract-accessor",

          "decorated-accessor",

          "accessor",

          // Getters
          "public-static-get",
          "protected-static-get",
          "private-static-get",
          "#private-static-get",

          "public-decorated-get",
          "protected-decorated-get",
          "private-decorated-get",

          "public-instance-get",
          "protected-instance-get",
          "private-instance-get",
          "#private-instance-get",

          "public-abstract-get",
          "protected-abstract-get",

          "public-get",
          "protected-get",
          "private-get",
          "#private-get",

          "static-get",
          "instance-get",
          "abstract-get",

          "decorated-get",

          "get",

          // Setters
          "public-static-set",
          "protected-static-set",
          "private-static-set",
          "#private-static-set",

          "public-decorated-set",
          "protected-decorated-set",
          "private-decorated-set",

          "public-instance-set",
          "protected-instance-set",
          "private-instance-set",
          "#private-instance-set",

          "public-abstract-set",
          "protected-abstract-set",

          "public-set",
          "protected-set",
          "private-set",
          "#private-set",

          "static-set",
          "instance-set",
          "abstract-set",

          "decorated-set",

          "set",

          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "#private-static-method",

          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",

          "private-instance-method",
          "#private-instance-method",
          "public-instance-method",
          "protected-instance-method",

          "public-abstract-method",
          "protected-abstract-method",

          "private-method",
          "#private-method",
          "public-method",
          "protected-method",

          "static-method",
          "instance-method",
          "abstract-method",

          "decorated-method",

          "method",
        ],
      },
    },
  ],
}

// Export both the config and the shared rules for use in Vue.js
export default sharedTypeScriptRules
