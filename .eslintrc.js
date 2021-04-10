module.exports = {
  env: {
    browser: true,
    es2020: true,
    // mocha: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'indent': ['error', 2],
  },
};