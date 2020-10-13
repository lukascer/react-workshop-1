module.exports = {
    env: {
        browser: true,
        node: true,
    },
    globals: { React: 'writable' },
    ignorePatterns: ['build'],
    extends: ['nextjs', 'plugin:react-hooks/recommended'],
    plugins: ['standard', 'promise', 'prettier', 'react'],
    parser: 'babel-eslint',
    rules: {
        'react/jsx-props-no-spreading': 0,
        'prettier/prettier': ['error'],
        'import/prefer-default-export': [1],
        'import/no-named-as-default': [0],
        'react/jsx-one-expression-per-line': 0,
        'jsx-a11y/href-no-hash': [0],
        'react/no-array-index-key': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'react/require-default-props': [1],
        'prefer-arrow-callback': [1],
        eqeqeq: ['warn', 'smart'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
    },
};
