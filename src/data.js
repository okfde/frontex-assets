import data from './assets.json'
import countries from './countries.json'
import { addObjects } from './utils'

export const groupsIds = [
  'officers',
  'vessels',
  'helicopters',
  'patrolCar',
  'dogTeam',
  'detectors'
]
const valueSort = ([, a], [, b]) => b - a

export const countryTotals = {}
for (const [country, years] of Object.entries(data)) {
  countryTotals[country] = addObjects(
    years.map(_y => {
      const y = { ..._y }
      delete y.year
      return y
    })
  )
}

const allTotals = addObjects(Object.values(countryTotals))

export function getCountryStats({ code }) {
  const totals = countryTotals[code]
  const relative = {}
  for (const group of groupsIds) {
    relative[group] = totals[group] / allTotals[group] || 0
  }

  const sortedGroups = Object.entries(relative).sort(valueSort)

  return { sortedGroups, totals }
}

export function getGroupStats(group) {
  return Object.entries(countryTotals)
    .map(([country, groups]) => [
      countries.find(c => c.code === country),
      groups[group] / allTotals[group]
    ])
    .sort(valueSort)
}
