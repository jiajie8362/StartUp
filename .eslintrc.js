/**
 * Created by jiajie on 17/5/5.
 */
module.exports = {
	root: true,
	extends: 'airbnb/base',
	parser: "babel-eslint",
	rules: {
		"strict": [2, "never"],

		"no-var": 2,
		"prefer-const": 2,

		"no-shadow": 2,
		"no-shadow-restricted-names": 2,
		"no-use-before-define": 2,

		"comma-dangle": [2, "never"],
		"no-cond-assign": [2, "always"],
		"no-debugger": 1,
		"no-constant-condition": 1,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 0,
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": 2,
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-obj-calls": 2,
		"no-sparse-arrays": 2,
		"no-unreachable": 2,
		"use-isnan": 2,
		"block-scoped-var": 2,

		"consistent-return": 2,
		"curly": [2, "multi-line"],
		"default-case": 2,
		"dot-notation": [2, {
			"allowKeywords": true
		}],

		"eqeqeq": 0,
		"guard-for-in": 2,
		"no-caller": 2,
		"no-else-return": 0,
		"no-eq-null": 0,
		"no-eval": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-implied-eval": 2,
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-multi-str": 2,
		"no-native-reassign": 2,
		"no-new": 2,
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-param-reassign": [2, {"props": false}],
		"no-process-exit": 0,
		"no-proto": 2,
		"no-redeclare": 2,
		"no-return-assign": 2,
		"no-script-url": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 2,
		"no-unused-expressions": 0,
		"no-with": 2,
		"radix": 2,
		"vars-on-top": 2,
		"wrap-iife": [2, "any"],
		"yoda": 2,

		"indent": [2, 2],
		"brace-style": [2, "1tbs", {
			"allowSingleLine": true
		}],
		"quotes": [
			1, "single", "avoid-escape"
		],
		"camelcase": [2, {
			"properties": "never"
		}],
		"comma-spacing": [2, {
			"before": false,
			"after": true
		}],
		"comma-style": [2, "last"],
		"eol-last": 2,
		"func-names": 0,
		"key-spacing": [2, {
			"beforeColon": false,
			"afterColon": true
		}],
		"new-cap": [2, {
			"newIsCap": true,
			"capIsNew": false
		}],
		"no-multiple-empty-lines": [2, {
			"max": 2
		}],
		"no-nested-ternary": 0,
		"no-new-object": 2,
		"no-spaced-func": 2,
		"no-trailing-spaces": 2,
		"no-extra-parens": [2, "functions"],
		"no-underscore-dangle": 0,
		"one-var": [0, "never"],
		"padded-blocks": [2, "never"],
		"semi": [2, "always"],
		"semi-spacing": [2, {
			"before": false,
			"after": true
		}],
		"space-after-keywords": [0, "never"],
		"space-before-blocks": 2,
		"space-before-function-paren": [2, "never"],
		"space-infix-ops": 2,
		"spaced-comment": [2, "always", {
			"exceptions": ["-", "+"],
			"markers": ["=", "!"]
		}],
		"operator-assignment": [2, "always"],
		"ignoreStrings": 0,
		"max-len": [2, 500]
	},
	globals: {
		"__": true,
		"Promise": true,
		"moment": true,
		"typeOf": true,
		"express": true,
		"describe": true,
		"it": true,
		"request": true,
		"expect": true,
		"Sinon": true,
		"testEnv": true,
		"appRoot": true,
		"Config": true,
		"Components": true,
		"Responses": true,
		"Routes": true,
		"Workers": true,
		"Schedulers": true,
		"MiddleWares": true,
		"Starters": true,
		"Models": true,
		"Queries": true,
		"Entities": true,
		"Entity": true,
		"ResponseError": true,
		"PagedResponse": true,
		"ListResponse": true,
		"Logger": true,
		"calledWith": true,
		"supertest": true,
		"winston": true,
		"Policies": true,
		"ServerLogger": true
	}
}
