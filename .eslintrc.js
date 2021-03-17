module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "promise",
    "import",
    "@next/eslint-plugin-next",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: [".", "src"],
      },
    },
  },
  rules: {
    "prettier/prettier": "error", // Let prettier rule our formatting
    "import/no-anonymous-default-export": "error", // For named React components
    "react/prop-types": "off", // Ignore prop-types as we are using typescript
    "react/react-in-jsx-scope": "off", // React is always in scope with Next.js
    "jsx-a11y/anchor-is-valid": "off", // Doesn't play well with next/link
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-var-requires": "off", // Allow CommonJS imports
        "global-require": "off", // Allow dynamic imports for Node
      },
    },
    {
      files: ["*.tsx"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "react/jsx-props-no-spreading": "off", // TypeScript makes this safe
      },
    },
    {
      files: ["./src/pages/**"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
    {
      files: ["./src/pages/api/**"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
