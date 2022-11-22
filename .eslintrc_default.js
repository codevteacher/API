let gitignore;
try {
    gitignore = require('fs')
        .readFileSync('./.gitignore')
        .toString()
        .split('\n')
        .filter((i) => i);
} catch (e) {
    gitignore = [];
}

module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        es2021: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        requireConfigFile: false,
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true
        }
    },
    ignorePatterns: [
        ...gitignore,
        '.eslintrc.js',
    ],
    extends: [
        'eslint:recommended',
    ],
    plugins: [
        '@babel'
    ],
    rules: {
        'no-unused-vars': 'warn',
        'no-debugger': 'warn',
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        curly: [
            'error',
            'all',
        ],
        'eol-last': [
            'error'
        ],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
                "ArrayExpression": 1,
                "ObjectExpression": 1 
            }
        ],
        'keyword-spacing': [
            'warn',
            {
                before: true
            }
        ],

        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-lines': [
            'error',
            {
                max: 1500,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        'max-nested-callbacks': [
            'error',
            5
        ],
        'max-params': [
            'error',
            5
        ],
        'max-statements': [
            'error',
            500
        ],
        'multiline-ternary': [
            'warn',
            'always-multiline'
        ],
        'no-array-constructor': [
            'error'
        ],
        'no-console': [
            'warn'
        ],
        'no-else-return': [
            'error'
        ],
        'no-eval': [
            'error'
        ],
        'no-nested-ternary': [
            'error'
        ],
        'no-trailing-spaces': [
            'error'
        ],
        'no-unneeded-ternary': [
            'error'
        ],
        'no-var': [
            'warn'
        ],
        'no-whitespace-before-property': [
            'error'
        ],
        'operator-linebreak': [
            'warn',
            'before'
        ],
        'prefer-const': [
            'error',
            {
                "destructuring": "all",
            }
        ],
        'quote-props': [
            'warn',
            'as-needed'
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ],
        semi: [
            'error',
            'always'
        ],
        'space-before-blocks': [
            'warn'
        ],
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': [
            'warn',
            'never'
        ],
        'space-infix-ops': [
            'warn'
        ],
        'space-unary-ops': [
            'warn',
            {
                words: true,
                nonwords: false,
                overrides: {
                },
            }
        ],

    },
    settings: {
        propWrapperFunctions: ['forbidExtraProps']
    }
};



