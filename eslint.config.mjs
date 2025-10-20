import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Allow quotes/apostrophes in JSX text without escaping
      "react/no-unescaped-entities": "off",
      // Downgrade unused vars to warnings
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // Allow any where needed in UI mapping utilities
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
