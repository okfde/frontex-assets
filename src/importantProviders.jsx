import { h } from 'tsx-dom'
import { getGroupStats, groupsIds } from './data'
import {
  getCountryName,
  getFlagEmoji,
  i18n,
  percentageFormat,
  groupModalButton
} from './utils.jsx'

export function renderProviders() {
  const root = document.querySelector('#fx-important-providers')
  const modal = document.querySelector('#fx-provider-modal')

  for (const group of groupsIds) {
    const providers = getGroupStats(group)

    const card = (
      <div class="col col-12 col-md-4 mb-4">
        <div class="box-card bg-white border-blue">
          <div class="box-card-header p-3 tight-margin bg-blue-20">
            <h4 class="h5">
              {i18n('groups', group, 'title')}
              {groupModalButton(group, modal)}
            </h4>
          </div>

          <div>
            <div class="p-3">
              <ol class="list-unstyled mb-0">
                {providers.slice(0, 5).map(([country, ratio], i) => (
                  <li
                    class="mb-2"
                    data-toggle="tooltip"
                    data-placement="left"
                    title={getCountryName(country)}
                  >
                    <div
                      class="d-flex align-items-center position-relative"
                      style="height: 0.75rem;"
                    >
                      <div class="h5 m-0">{getFlagEmoji(country.code)}</div>

                      <div
                        class={`ml-1 rounded h-100 ${
                          i === 0 ? 'bg-blue-600' : 'bg-gray-400'
                        }`}
                        role="progressbar"
                        style={`width: ${ratio * 100}%`}
                        aria-valuenow={Math.round(ratio * 100)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <small class="ml-auto position-absolute" style="right: 0">
                        {percentageFormat(ratio)}
                      </small>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )

    root.appendChild(card)
  }

  window.BSN?.initCallback()
}
