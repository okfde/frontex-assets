import { getCountryLabel, getLanguage, i18n } from './utils.js'
import { getCountryStats } from './data.js'
import { makeChart } from './chart.js'

export const countrySelector = document.querySelector('#fx-country-selector')

export function setCountry(country) {
  const language = getLanguage()
  const stats = document.querySelector('#fx-stats')
  const hint = document.querySelector('#fx-hint')

  countrySelector.innerText = getCountryLabel(country)

  hint.innerText = i18n('description')
  if (country.hint?.[language]) {
    hint.innerHTML += `<br>${country.hint[language]}`
  }

  stats.innerHTML = ''

  const { sortedGroups, totals } = getCountryStats(country)

  const locale = language === 'de' ? 'de-DE' : 'en-US'

  const integerFormat = new Intl.NumberFormat(locale).format
  const percentageFormat = new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: 1
  }).format

  for (const [group, ratio] of sortedGroups) {
    const total = totals[group]
    if (total === 0) continue

    const container = document.createElement('div')
    container.classList.add('row', 'mb-3')
    container.innerHTML = `
      <div class="col-12 col-md-6 order-md-2 fx-chart"></div>
      <div class="text-nowrap col-12 col-md-6 d-flex flex-column justify-content-center my-3">
        <div>
          <span class="h3">${integerFormat(total)}</span>
          ${i18n('groups', group, 'title')} ${i18n('stats', 'providedInTotal')}
        </div>

        <span class="text-gray-700 mt-1">${percentageFormat(ratio)}
        ${i18n('stats', 'ofAll')} ${i18n('groups', group, 'title')}</span>
      </div>
    `

    makeChart(container.querySelector('.fx-chart'), country, group)
    stats.appendChild(container)
  }

  document.querySelector('#fx-attribution').innerText = i18n('attribution')
  document
    .querySelector('#fx-download-png')
    ?.setAttribute(
      'href',
      `https://raw.githubusercontent.com/okfde/frontex-assets/gh-pages/assets/countries/${country.code}-${language}.png`
    )
}
