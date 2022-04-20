import { h } from 'tsx-dom'
import _countries from './countries.json'
import i18nStrings from './i18n.json'

export let language
export let locale
export let integerFormat
export let percentageFormat

export function setLanguage(
  to = document.documentElement.lang === 'de' ? 'de' : 'en'
) {
  language = to
  locale = language === 'de' ? 'de-DE' : 'en-US'

  integerFormat = new Intl.NumberFormat(locale).format
  percentageFormat = new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: 1,
    minimumFractionDigits: 1
  }).format
}
setLanguage()

// country selector helpers
export const countries = _countries.sort((a, b) =>
  a.name[language] < b.name[language] ? -1 : 1
)

export function getFlagEmoji(countryCode) {
  if (countryCode === 'FX') return '🇪🇺'
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

export function getCountryName(country) {
  return country.name[language]
}

export function getCountryLabel(country) {
  return `${getFlagEmoji(country.code)} ${getCountryName(country)}`
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

export function groupModalButton(group, modal) {
  const prepareModal = () => {
    console.log('m', modal, group)
    modal.querySelector('h5').innerText = i18n('groups', group, 'title')
    modal.querySelector('p').innerHTML = i18n('groups', group, 'description')
  }

  return i18n('groups', group, 'description') ? (
    <button
      class="btn btn-sm btn-light ml-2"
      data-toggle="modal"
      data-target={`#${modal.id}`}
      onClick={prepareModal}
    >
      <i class="fa fa-info"></i>
      <span class="sr-only">More information...</span>
    </button>
  ) : undefined
}

import twemoji from 'twemoji'
export { twemoji }
