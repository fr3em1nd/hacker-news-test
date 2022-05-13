module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/no-unresolved': 0, // Turn off "Unable to resolve path to module ..." error
    'import/extensions': 0, // Turn off "Missing file extension for ..." error
  },
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    // my customs
    'no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['error'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'one-var': 'off',
    'prefer-template': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'prefer-destructuring': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'dot-notation': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    camelcase: 'off',
    'import/named': 'error',
    'jsx-a11y/accessible-emoji': 'off',
    'react/no-unescaped-entities': 'off',
    'no-await-in-loop': 'off',
    'global-require': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    //
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
}