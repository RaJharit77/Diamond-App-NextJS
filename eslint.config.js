import next from 'eslint-config-next';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ...next,
    },
    {
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
        },
    },
];