export default {
  title: 'Icons',
}

// Brand icons

let brands_markup = ''
let brands = ['DevTo', 'GitHub', 'Instagram', 'LinkedIn', 'Spotify', 'Twitter']

brands.forEach(
  (brand) =>
    (brands_markup +=
      '<IconWrapper><div class="text-gray-50 border border-red-500 w-6 h-6"><' +
      brand +
      ' /></div></ IconWrapper>')
)

export const Brands = () => brands_markup

// Symbols

let symbols_markup = ''
let symbols = ['PlusSm', 'MinusSm']

symbols.forEach(
  (symbol) =>
    (symbols_markup +=
      '<IconWrapper><div class="text-gray-50 border border-red-500 w-6 h-6"><' +
      symbol +
      ' /></div></ IconWrapper>')
)

export const Symbols = () => '<div>' + symbols_markup + '</div>'
