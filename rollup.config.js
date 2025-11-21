import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/Button.tsx", // entry file
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES module
    },
  ],
  external: ["react", "react-dom"], // mark React as external
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
};
