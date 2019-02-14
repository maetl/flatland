import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
      name: 'flatland',
			file: pkg.browser,
			format: 'iife'
		}
	},
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.main, format: 'cjs' }
		]
	},
	{
		input: 'src/algorithms.js',
		output: [
			{ file: "algorithms.js", format: 'cjs' }
		]
	}
];
