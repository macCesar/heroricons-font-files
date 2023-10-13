module.exports = {
  extends: 'axway/env-alloy',
  globals: {
    $model: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    indent: [
      'error',
      2,
      { SwitchCase: 1 }
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'max-statements-per-line': [
      'error',
      { max: 1 }
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'array-bracket-spacing': [
      'error', 'never'
    ]
  }
}
