module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'object-curly-spacing': ["error", "always"],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "comma-dangle": [
      "error"
    ],
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "space-infix-ops": [
      "error",
      {
        "int32Hint": false
      }
    ],
    "no-var": "error",
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "@typescript-eslint/no-explicit-any": 0
  },
}
