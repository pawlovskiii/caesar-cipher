module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'no-console': 'off',
		'no-plusplus': 'off',
		'linebreak-style': ['error', 'windows'],
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-alert': 'off',
		'no-unused-vars': 'off',
		'func-names': ['error', 'never'],
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
	},
};
