module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the TypeScript ESLint parser
  extends: [
    "eslint:recommended", // Uses the recommended base rules in eslint
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    node: true,
    es6: true,
    "jest/globals": true
  },
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  plugins: ["jest"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified
    // from the extended configs.

    // If you add anything here, justify why.
    "@typescript-eslint/explicit-function-return-type": false, // inference makes code less wordy
    "@typescript-eslint/no-object-literal-type-assertion": [
      true,
      { "allow-arguments": true } // useful for calls to builtins like Array.reduce
    ],
    "@typescript-eslint/no-empty-interface": false, // useful for annotating function of types in progress
    "@typescript-eslint/no-unused-vars": { ignoreRestSiblings: true } // useful to use rest/spread syntax to omit keys
  }
};
