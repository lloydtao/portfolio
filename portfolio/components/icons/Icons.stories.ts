export default {
  title: 'Icons',
}

// Brand icons

let brandsMarkup = ''
const brands = [
  'DevTo',
  'GitHub',
  'Instagram',
  'LinkedIn',
  'Spotify',
  'Twitter',
]

brands.forEach(
  (brand) =>
    (brandsMarkup +=
      '<IconWrapper><div class="text-gray-50 border border-red-500 w-6 h-6"><' +
      brand +
      ' /></div></ IconWrapper>')
)

export const Brands = () => brandsMarkup

// Symbols

let symbolsMarkup = ''
const symbols = ['PlusSm', 'MinusSm']

symbols.forEach(
  (symbol) =>
    (symbolsMarkup +=
      '<IconWrapper><div class="text-gray-50 border border-red-500 w-6 h-6"><' +
      symbol +
      ' /></div></ IconWrapper>')
)

export const Symbols = () => '<div>' + symbolsMarkup + '</div>'
