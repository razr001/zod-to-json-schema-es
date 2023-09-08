import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default [
	{
		input: "./index.ts",
		output: [
			{
				format: "cjs",
				file: "dist/index.cjs",
			},
			{
				format: "es",
				file: "dist/index.mjs",
			},
		],
		plugins: [del({ targets: "dist/*" }), typescript()],
	},
];
