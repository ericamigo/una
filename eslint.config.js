import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import unusedImports from 'eslint-plugin-unused-imports'

export default defineConfig([
    {
        files: ['resources/js/**/*.{js,vue}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                route: 'readonly',
                axios: 'readonly',
            },
        },
        plugins: { js, 'unused-imports': unusedImports },
        extends: ['js/recommended', ...pluginVue.configs['flat/essential']],
        rules: {
            'indent': ['error', 4, { SwitchCase: 1 }],
            'unused-imports/no-unused-imports': 'error',
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': 'off',
            'vue/prefer-use-template-ref': 'error',
            'vue/no-v-text-v-html-on-component': [
                'error',
                {
                    'allow': ['link', 'prose', 'table-td'],
                },
            ],
        },
        ignores: ['**/vendor/**', '**/node_modules/**', '**/public/**', '**/storage/**', '**/*.php', '**/Tooltip.vue'],
    },
])

