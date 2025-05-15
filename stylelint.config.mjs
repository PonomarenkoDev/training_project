/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
    ],
    plugins: ['stylelint-scss'],
    rules: {
        indentation: 4,
        'selector-class-pattern': null
    },
};