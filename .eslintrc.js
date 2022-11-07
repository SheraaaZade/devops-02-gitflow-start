module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs:true,
  },
  extends: 'prettier',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': [
			'error',
			'unix'
		],
		'semi': [
			'error',
			'always'
		]
  }
}
