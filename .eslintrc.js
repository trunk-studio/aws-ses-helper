module.exports = {
	"extends": [
    "airbnb-base",
	],
	"plugins": [
		"import"
	],
  "rules": {
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-await-in-loop': 'warn',
  }
}