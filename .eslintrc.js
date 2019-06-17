module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["plugin:@typescript-eslint/recommended", "airbnb-base"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "import/newline-after-import": 'off',
        "@typescript-eslint/indent": ["error", 2],
        "import/prefer-default-export": 'off',
        "max-len": ["error", { code: 140 }],
        "consistent-return": 'off'
    }
};