# Reusable ESLint Configuration

## Installation

Most people should use the command under "Install as read-only submodule". If you have access to write to this repository, use the command under "Install as editable submodule".

### Install as read-only submodule

To add this repo as a read-only submodule, run the following from your project root:

```bash
git submodule add https://github.com/jesse-kaufman/eslint-config.git eslint-config
```

### Install as editable submodule

```bash
git submodule add git@github.com:jesse-kaufman/eslint-config.git eslint-config
```

### Copy main config into place

Once the submodule has been added, run the following (from your project root) to copy the main eslint.config.js file into place:

```bash
cp eslint-config/eslint.example.js eslint.config.js
```

## ESLint Rules

- **100_plugins.js**:
    - Initializes plugins used by other configuration files
    - Applies the following rules as a starting point for all files
        - `configs.recommended` from `@eslint/js` _(core JS/TS rules)_
        - `flatConfigs.recommended` from `eslint-plugin-import` _(import rules for JS/TS)_
- **200_base.js**:
    - Contains core rules that apply to all JavaScript and TypeScript files as well Vue SFC files (*.vue)
    - Contains core ignores to avoid eslint checking files in node_modules, etc.
    - Organized into the following sections:
        - Code Style & Formatting
        - Code Quality & Best Practices
        - Naming Conventions
        - Function & Code Organization
        - Magic Numbers & Literals
        - Modern JavaScript Patterns
        - Import Plugin Rules
- **300_jsdoc.js**:
    - Contains JSDoc rules that apply to all JavaScript and TypeScript files
        - Uses `flat/recommended-typescript-flavor` as the base for for JavaScript
        - Uses `flat/recommended-typescript` as the base for TypeScript
- **400_typescript.js**:
    - Contains TypeScript-specific rules as well as overrides to the above
- **410_vue.js**:
    - Contains Vue-specific rules for SPC files (*.vue) as well as overrides to the above
    - Applies `flat/recommended` from `eslint-plugin-vue` as a base
    - Organized into the following sections:
        - **TypeScript:**
            - _Inherits rules from `400_typescript.js`_
            - _Requires `lang="ts"` on `<script setup>`_
        - **Template Safety:**
            - _Disallows potentially unsafe code_
        - **Template Best Practices:**
            - _Enforces `nextTick()` style_
            - _Warns about potential reactivity loss_
            - _Prevents useless `v-bind` / mustaches_
            - _Enforces use of `templateRef()` for template refs_
            - _Enforces use of separate `class=""` for static class names_
        - **Component Best Practices:**
            - _Enforces use of Component API with `<script setup>`_
            - _Enforces consistent ordering of SFC sections_
            - _Enforces consistent ordering of macros (`defineOptions`, `defineEmits`, `defineModel`, `defineProps`)
            - _Enforces consistent component names / filenames_
            - _Warns about undefined props and components_
            - _Warns about unused props, refs, and emit declarations_
            - _Recommends setting `inheritAttrs: false` when `v-bind="$attrs"` is used_
            - _Prevents importing compiler macros_
        - **Props / Events:**
            - _Enforces camelcase for props / custom event names_
            - _Enforces using shorthand for true boolean props (e.g.: `boolProp` instead of `:boolProp="true"`)_
            - _Ensures Boolean types are listed first for multi-type props (so props default to boolean to allow previous bullet point to work properly)_
        - **Template Formatting:**
            - _Enforces `type="..."` on all `<button />` elements_
            - _Disables max attributes per line for improved wrapping_
            - _Enforces self-closing syntax for all empty elements (e.g. `<div />` vs `<div></div>`)_
            - _Enforces camelcase over hyphenated (snake case) attributes_
        - **Style & Static Content:**
            - _Enforces `scoped` property on `<style>...</style>` sections_
            - _Enforces more readable class property when using objects_
            - _Enforces newline between certain elements for improved legibility_
        - **JSDoc Overrides:**
            - _Disables `@file` requirement for SFCs_
        - **Icon Component Overrides:**
            - _Disables `@stylistic/max-line` for icon components containing SVG code_
        - **Composable Overrides:**
            - _Disables `max-lines-per-function` for composables_
- **420_javascript.js**:
    - Contains JavaScript-specific rules as well as overrides to the above
- **500_vitest.js**:
    - Contains rules specific to vitest test files and configuration
- **999_overrides.js**:
    - Contains overrides for various files such as tooling configuration and config directories inside packages