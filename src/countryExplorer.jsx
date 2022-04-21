import { h } from 'tsx-dom'
import {
  getCountryLabel,
  language,
  i18n,
  integerFormat,
  percentageFormat,
  groupModalButton,
  getShareImageUrl,
  shareImage,
  canShare
} from './utils.jsx'
import { countryTotals, getCountryStats } from './data.js'
import { makeChart } from './chart.js'

export const countrySelector = document.querySelector('#fx-country-selector')

let shareListener

export function setCountry(country) {
  const stats = document.querySelector('#fx-stats')
  const hint = document.querySelector('#fx-hint')
  const modal = document.querySelector('#fx-explorer-modal')

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
            {groupModalButton(group, modal)}
          </div>

          <span class="text-gray-700 mt-1">
            {percentageFormat(ratio)} {i18n('stats', 'ofAll')}
          </span>
        </div>
      </div>
    )

    makeChart(container.querySelector('.fx-chart'), country, group)
    stats.appendChild(container)
  }

  document.querySelector('#fx-attribution').innerText = i18n('attribution')

  const shareImageEl = document.querySelector('#fx-download-png')
  if (shareImageEl) {
    const url = getShareImageUrl(country)
    shareImageEl.setAttribute('href', url)

    if (shareListener) shareImageEl.removeEventListener('click', shareListener)

    shareListener = async e => {
      e.preventDefault()
      const open = () => window.open(url)
      if (!(await shareImage(country).catch(open))) open()
    }

    shareImageEl.addEventListener('click', shareListener)

    if (canShare)
      shareImageEl.querySelector('i')?.setAttribute('class', 'fa fa-share-alt')
  }

  window.BSN?.initCallback()
}
