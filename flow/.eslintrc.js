module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "vue/no-unused-components": "off", // 当存在定义而未使用的组件时，关闭报错
    "no-unused-vars":"off", // 当存在定义而未使用的变量时，关闭报错
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭any警告
    "@typescript-eslint/no-explicit-any": ["off"],
    'vue/multi-word-component-names': 0,
  }
}
