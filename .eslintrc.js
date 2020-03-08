module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    "prettier"
  ],
  plugins: [
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'consistent-return': 'off',
    'prefer-const': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'prefer-promise-reject-errors': 'off',
    'func-names': 'off',
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'linebreak-style': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'no-multi-assign': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
  },
};
