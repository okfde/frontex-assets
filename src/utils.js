function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

export const language = document.documentElement.lang === 'de' ? 'de' : 'en'

export function getCountryLabel(country) {
  return `${getFlagEmoji(country.code)} ${country.name[language]}`
}
