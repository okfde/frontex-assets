import { h } from 'tsx-dom'
import {
  getCountryLabel,
  language,
  i18n,
  integerFormat,
  percentageFormat
} from './utils.js'
import { countryTotals, getCountryStats } from './data.js'
import { makeChart } from './chart.js'

export const countrySelector = document.querySelector('#fx-country-selector')

export function setCountry(country) {
  const stats = document.querySelector('#fx-stats')
  const hint = document.querySelector('#fx-hint')

  countrySelector.innerText = getCountryLabel(country)

  hint.innerText = i18n('description')
  if (country.hint?.[language]) {
    hint.innerHTML += `<br>${country.hint[language]}`
  }

  stats.innerHTML = ''

  const totals = countryTotals[country.code]
  const { sortedGroups } = getCountryStats(country)

  for (const [group, ratio] of sortedGroups) {
    const total = totals[group]
    if (total === 0) continue

    const container = (
      <div class="row mb-3">
        <div class="col-12 col-md-6 order-md-2 fx-chart"></div>
        <div class="text-nowrap col-12 col-md-6 d-flex flex-column justify-content-center my-3">
          <div>
            <span class="h3">{integerFormat(total)}</span>{' '}
            {i18n('groups', group, 'title')} {i18n('stats', 'providedInTotal')}
            {i18n('groups', group, 'description') ? (
              <button
                class="btn btn-sm btn-light ml-1"
                data-toggle="modal"
                data-target="#fx-info-modal"
                onClick={() => setModal(group)}
              >
                <i class="fa fa-info"></i>
                <span class="sr-only">More information...</span>
              </button>
            ) : undefined}
          </div>

          <span class="text-gray-700 mt-1">
            {percentageFormat(ratio)} {i18n('stats', 'ofAll')}{' '}
            {i18n('groups', group, 'title')}
          </span>
        </div>
      </div>
    )

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

function setModal(group) {
  const modal = document.querySelector('#fx-info-modal')
  modal.querySelector('h5').innerText = i18n('groups', group, 'title')
  modal.querySelector('p').innerText = i18n('groups', group, 'description')
}
