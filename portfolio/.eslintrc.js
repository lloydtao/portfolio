module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['tailwindcss'],
  // add your custom rules here
  rules: { 'vue/multi-word-component-names': 0 },
}
