module.exports = {
    extends: ["airbnb", "plugin:react/recommended"],
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        modules: true,
        experimentalObjectRestSpread: true
      }
    },
    plugins: ["react"],
    rules: {
      "no-use-before-define": 0,
      "no-underscore-dangle": 0,
      "no-unused-vars": "warn",
      "arrow-parens": ["error", "as-needed"],
      "object-curly-newline": 0,
      quotes: ["error", "double"],
      "comma-dangle": [
        "error",
        {
          arrays: "never",
          objects: "never",
          imports: "never",
          exports: "never",
          functions: "ignore"
        }
      ],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*-test.js", "**/setupTests.js"]}],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "react/jsx-one-expression-per-line": 0,
      "react/prefer-stateless-function": 0,
      "react/prop-types": 0,
      "react/destructuring-assignment": 0
    },
    globals: {
      __DEV__: false,
      __dirname: false,
      alert: false,
      Blob: false,
      cancelAnimationFrame: false,
      cancelIdleCallback: false,
      clearImmediate: true,
      clearInterval: false,
      clearTimeout: false,
      console: false,
      describe: false,
      document: false,
      escape: false,
      Event: false,
      EventTarget: false,
      expect:false,
      exports: false,
      fetch: false,
      File: false,
      FileReader: false,
      FormData: false,
      global: false,
      it: false,
      Map: true,
      module: false,
      navigator: false,
      process: false,
      Promise: true,
      requestAnimationFrame: true,
      requestIdleCallback: true,
      require: false,
      Set: true,
      setImmediate: true,
      setInterval: false,
      setTimeout: false,
      WebSocket: false,
      window: false,
      XMLHttpRequest: false
    },
    settings: {
      react: {
        pragma: "React",
        version: "16.3.1"
      },
      "import/resolver": {
        node : {
          paths: [
            process.env.NODE_PATH.split(":").map(path.resolve)
          ]
        }
      }
    }
  };
  