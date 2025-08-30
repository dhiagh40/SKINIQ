const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactNative = require('eslint-plugin-react-native');
const parser = require('@typescript-eslint/parser');
const eslintPluginTs = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: ["node_modules/", "dist/"],
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "react": eslintPluginReact,
      "react-native": eslintPluginReactNative,
      "@typescript-eslint": eslintPluginTs
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: parser,
      globals: {
        "__dirname": "readonly",
      },
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactNative.configs.all.rules,
      // يمكنك إضافة أو تعديل القواعد هنا حسب احتياجاتك
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 0,
      "react-native/no-color-literals": 0,
      "react-native/no-raw-text": 0
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];