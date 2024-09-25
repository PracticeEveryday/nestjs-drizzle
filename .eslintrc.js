const { resolve } = require('node:path');

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'import'],
    extends: ['plugin:@typescript-eslint/recommended', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './',
            },
            node: {
                paths: [resolve(__dirname)],
            },
        },
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'class-methods-use-this': 'off',
        'import/no-duplicates': 'error',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',

        /**
         * TODO: devDependencies 에 대한 학습이 필요함.
         * eslint import/no-extraneous-dependencies 의 default 값은 DevDependencies 도 에러이기 떄문이다.
         * devDependencies 에서 임포트 받는 대표적인 패키지는 request-ip가 있다.
         */
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'unknown'],
                pathGroups: [
                    {
                        pattern: '@COMMON/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '@TODO/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '@DB/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '@LOGGER/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '**.{module,controller,service}',
                        patternOptions: { matchBase: true },
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '**.{repository,entity}',
                        patternOptions: { matchBase: true },
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '**.dto',
                        patternOptions: { matchBase: true },
                        group: 'internal',
                        position: 'before',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
