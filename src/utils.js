import _countries from './countries.json'
import i18nStrings from './i18n.json'

export const language = document.documentElement.lang === 'de' ? 'de' : 'en'

// country selector helpers

export const countries = _countries.sort((a, b) =>
  a.name[language] < b.name[language] ? -1 : 1
)

function getFlagEmoji(countryCode) {
  if (countryCode === 'FX') return ''
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

export function getCountryLabel(country) {
  return `${getFlagEmoji(country.code)} ${country.name[language]}`
}

export function addObjects(objs) {
  return objs.reduce((a, b) => {
    for (let key in b) {
      a[key] = (a[key] ?? 0) + b[key]
    }
    return a
  }, {})
}

export function i18n(...path) {
  return [...path, language].reduce(
    (obj, segment) => obj?.[segment],
    i18nStrings
  )
}
