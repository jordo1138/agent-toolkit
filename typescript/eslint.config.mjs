import prettier from "eslint-plugin-prettier";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("plugin:prettier/recommended"), {
    plugins: {
        prettier,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2018,
        sourceType: "commonjs",
    },

    rules: {
        "accessor-pairs": "error",
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": "off",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "off",
        "block-spacing": "off",

        "brace-style": ["error", "1tbs", {
            allowSingleLine: true,
        }],

        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": ["error", "last"],
        complexity: "error",
        "computed-property-spacing": ["error", "never"],
        "consistent-return": "off",
        "consistent-this": "off",
        curly: "error",
        "default-case": "off",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eol-last": "error",
        eqeqeq: "off",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": "off",

        "func-style": ["error", "declaration", {
            allowArrowFunctions: true,
        }],

        "generator-star-spacing": "error",
        "global-require": "off",
        "guard-for-in": "error",
        "handle-callback-err": "off",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "import/extensions": "off",
        "init-declarations": "off",
        "jsx-quotes": "error",
        "key-spacing": "error",

        "keyword-spacing": ["error", {
            after: true,
            before: true,
        }],

        "line-comment-position": "off",
        "linebreak-style": ["error", "unix"],
        "lines-around-directive": "error",
        "max-depth": "error",
        "max-len": "off",
        "max-lines": "off",
        "max-nested-callbacks": "error",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-ternary": "off",
        "new-cap": "off",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-catch-shadow": "off",
        "no-compare-neg-zero": "error",
        "no-confusing-arrow": "error",
        "no-continue": "off",
        "no-div-regex": "error",
        "no-duplicate-imports": "off",
        "no-else-return": "off",
        "no-empty-function": "off",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-floating-decimal": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": ["error", "functions"],
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-mixed-requires": "error",
        "no-multi-assign": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-path-concat": "error",

        "no-plusplus": ["error", {
            allowForLoopAfterthoughts: true,
        }],

        "no-process-env": "off",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "off",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-sync": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",

        "no-unused-vars": ["error", {
            args: "none",
        }],

        "no-use-before-define": "off",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "off",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "off",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "off",
        "object-curly-spacing": ["error", "never"],
        "object-property-newline": "off",
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": "error",
        "operator-assignment": ["error", "always"],
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",

        "prefer-destructuring": ["error", {
            array: false,
            object: false,
        }],

        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": "off",

        quotes: ["error", "single", {
            avoidEscape: true,
        }],

        radix: "error",
        "require-await": "error",
        "require-jsdoc": "off",
        "rest-spread-spacing": "error",
        semi: "off",

        "semi-spacing": ["error", {
            after: true,
            before: false,
        }],

        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "off",
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        strict: "off",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": ["error", "never"],
        "valid-jsdoc": "off",
        "vars-on-top": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "error",
        yoda: ["error", "never"],
    },
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
).map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    rules: {
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/triple-slash-reference": 0,
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-require-imports": 0,

        "@typescript-eslint/naming-convention": ["error", {
            selector: "default",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            leadingUnderscore: "allow",
        }, {
            selector: "property",
            format: null,
        }],

        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-var-requires": 0,
        "prefer-rest-params": "off",
    },
}, {
    files: ["test/**/*.ts"],

    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
    },
}, {
    files: ["examples/cloudflare/**/*.ts", "examples/cloudflare/**/*.js", "examples/cloudflare/**/*.mjs"],
    ignores: [],
    rules: {
        // Disable all rules for cloudflare examples
        ...Object.fromEntries(
            Object.keys(typescriptEslint.rules).map(rule => [`@typescript-eslint/${rule}`, "off"])
        ),
        // Disable all base rules
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-console": "off",
        "require-await": "off",
        "prettier/prettier": "off",
        "func-style": "off",
        "no-warning-comments": "off",
        "no-constant-condition": "off",
        // Add any other rules you want to disable
    }
}];
