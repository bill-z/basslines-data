module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:cypress/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'cypress',
    'chai-friendly',
  ],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
  env: {
    'cypress/globals': true,
  },
}
