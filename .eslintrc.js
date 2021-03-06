module.exports = {
    root: true,
    env: {
        node: true
    },
    // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        parser: "babel-eslint"
    },
    globals: { d3: true },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    // "prettier/prettier": "off"
};