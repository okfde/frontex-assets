import { getCountryLabel, countries } from './utils'
import { setCountry, countrySelector } from './countryExplorer'
import { renderProviders } from './importantProviders'

for (const country of countries) {
  const link = document.createElement('a')
  link.classList.add('dropdown-item')
  link.href = '#!'
  link.innerText = getCountryLabel(country)
  link.addEventListener('click', () => setCountry(country))
  countrySelector.nextElementSibling.appendChild(link)
}

setCountry(countries.find(c => c.code === 'DE'))

renderProviders()
