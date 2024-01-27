/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
	// parsing error: Unexpected token module
	parser: 'vue-eslint-parser',
	parserOptions: {
		project: true,
		parser: {
			js: '@babel/eslint-parser',
			ts: parserForVue,
			'<template>': parserForVue,
			vue: 'vue-eslint-parser',
		},
		ecmaVersion: 'latest',
	},
	plugins: ['@typescript-eslint'],
	// parsing error: Unexpected token module [end]

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto', // 한줄 추가
			},
		],
	},
};
