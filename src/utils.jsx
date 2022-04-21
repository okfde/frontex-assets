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
    const groupTitle = i18n('groups', group, 'title')
    modal.querySelector('h5').innerText =
      groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1)
    const text = modal.querySelector('p')
    text.innerHTML = i18n('groups', group, 'description')
    text.querySelectorAll('a').forEach(a => {
      a.setAttribute('target', '_blank')
      a.setAttribute('rel', 'noopener noreferrer')
    })
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

export function getShareImageUrl(country) {
  const baseUrl = document.querySelector('script[data-assets]')?.dataset.assets
  return `${baseUrl}assets/countries/${country.code}-${language}.png`
}

export const canShare = navigator.canShare?.({
  files: [new File([], '', { type: 'image/png' })]
})

export async function shareImage(country) {
  const url = getShareImageUrl(country)

  if (canShare) {
    const countryName = country.name[language]
    const request = await fetch(url)
    const blob = await request.blob()
    const files = [new File([blob], `${countryName}.png`, { type: blob.type })]

    if (navigator.canShare({ files })) {
      await navigator.share({
        title: countryName,
        text: i18n('shareText').replace('$country', countryName),
        files
      })
      return true
    }
  }

  return false
}

import twemoji from 'twemoji'
export { twemoji }
