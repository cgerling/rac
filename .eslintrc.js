module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'jest'],
  rules: {
    'react/prop-types': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
