import data from './assets.json'
import { addObjects } from './utils'

const groupsIds = [
  'officers',
  'detectors',
  'dogTeam',
  'vessels',
  'helicopters',
  'patrolCar'
]

const countryTotals = {}
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

  const sortedGroups = Object.entries(relative).sort(([, a], [, b]) => b - a)

  return { sortedGroups, totals }
}
