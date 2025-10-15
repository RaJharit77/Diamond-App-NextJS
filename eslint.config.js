// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2020,
                ...globals.node,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-unused-vars': 'warn',
            'no-console': 'warn',
        },
    },
];