import { getCountryLabel, countries, i18n } from './utils'
import { setCountry, countrySelector } from './components'
import './style.css'
import twemoji from 'twemoji'
window.twemoji = twemoji

for (const country of countries) {
  const link = document.createElement('a')
  link.classList.add('dropdown-item')
  link.href = '#!'
  link.innerText = getCountryLabel(country)
  link.addEventListener('click', () => setCountry(country))
  countrySelector.nextElementSibling.appendChild(link)
}

setCountry(countries.find(c => c.code === 'DE'))

document.querySelector('#fx-attribution').innerText = i18n('attribution')
