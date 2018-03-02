module.exports = {
  'extends': 'eslint:recommended',

  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
  },

  'env': {
    'commonjs': true,
    'browser': true,
    'es6': true,
  },

  'globals': {
    'process': false,
  },

  'rules': {
    'arrow-parens': ['error', 'always'],
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'consistent-return': 'error',
    'curly': ['error', 'all'],
    'dot-notation': ['error', {'allowKeywords': true}],
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'indent-legacy': ['error', 2],
    'jsx-a11y/alt-text': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
    'keyword-spacing': 'error',
    'new-cap': 'off',
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-console': ['error', {'allow': ['info', 'warn', 'error']}],
    'no-delete-var': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-spaces-and-tabs': ['error', false],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', {'vars': 'all', 'args': 'after-used'}],
    'no-use-before-define': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'semi': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
    'strict': ['off', 'never'],
    'yoda': ['error', 'never', {'exceptRange': true}],
  },
};
