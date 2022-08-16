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
        devto: {
          primary: '#0a0a0a',
          lighter: '#313131',
        },
        github: {
          primary: '#211F1F',
          darker: '#141313',
          lighter: '#373535',
        },
        instagram: {
          primary: '#C13584',
          darker: '#833AB4',
          lighter: '#d76ea9',
        },
        linkedin: {
          primary: '#0A66C2',
          darker: '#004182',
          lighter: '#378fe9',
        },
        spotify: {
          primary: '#1db954',
          darker: '#14813a',
          lighter: '#1ed760',
          websafe: '#19884B',
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
  plugins: [require('@tailwindcss/typography')],
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
}
