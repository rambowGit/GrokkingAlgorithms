import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    js.configs.recommended,
    {
        plugins: {
            // '@stylistic/js': stylisticJs
        },
        files: ['src/**/*.js'],
        ignores: ['**/*.config.js', '!**/eslint.config.js'],
        rules: {
            'prefer-const': 'error',
            'no-var': 'error',
        },
    },
    eslintPluginPrettierRecommended,
];
