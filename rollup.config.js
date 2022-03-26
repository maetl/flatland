import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
	{
		input: "bundle.config.js",
		output: [
			{
	      name: "flatland",
				file: pkg.main,
				format: "cjs"
			},
			{
				name: "flatland",
				file: "flatland.min.js",
				format: "iife",
				plugins: [terser()]
			}
		],
		plugins: [json()]
	}
];
