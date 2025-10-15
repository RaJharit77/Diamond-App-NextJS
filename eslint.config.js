import next from 'eslint-config-next';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...next(),
    {
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
        },
    },
];