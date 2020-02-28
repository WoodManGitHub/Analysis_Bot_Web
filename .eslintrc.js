module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  ignorePatterns: [
    'node_modules/',
    'src/assets/js/'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/camelcase': 'off',
    '@typescript-eslint/camelcase': 'off'
  }
}
