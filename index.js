module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['flowtype'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    browser: true,
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'no-use-before-define': ['error', 'nofunc'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'arrow-parens': ['error', 'always'],

    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/display-name': 0,
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],

    'flowtype/generic-spacing': 0,
    'flowtype/space-after-type-colon': [
      2,
      'always',
      {
        allowLineBreak: true,
      },
    ],
  },
};
