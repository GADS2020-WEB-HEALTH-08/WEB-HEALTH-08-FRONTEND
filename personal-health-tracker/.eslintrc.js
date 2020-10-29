module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 1,
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ]
  }
};
