import _countries from './countries.json'
import { getCountryLabel, language } from './utils'
import './style.css'

const countrySelector = document.querySelector('#fx-country-selector')

const countries = _countries.sort((a, b) =>
  a.name[language] < b.name[language] ? -1 : 1
)

for (const country of countries) {
  const link = document.createElement('a')
  link.classList.add('dropdown-item')
  link.href = '#!'
  link.innerText = getCountryLabel(country)
  link.addEventListener('click', () => setCountry(country))
  countrySelector.nextElementSibling.appendChild(link)
}

function setCountry(country) {
  countrySelector.innerText = getCountryLabel(country)
}
