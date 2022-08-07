/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        github: {
          primary: '#211F1F',
          darker: '#141313',
          lighter: '#373535',
        },
        twitter: {
          primary: '#139BF1',
          darker: '#1670ab',
          lighter: '#2f89c5',
          websafe: '#0778D6',
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
}
