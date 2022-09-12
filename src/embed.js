import { Tooltip, Alert, Dropdown, Modal, Tab, Collapse } from 'bootstrap'
window.bootstrap = { Tooltip, Alert, Dropdown, Modal, Tab, Collapse }

document.addEventListener('DOMContentLoaded', () => {
  // if in iframe
  if (window !== window.parent) {
    const explorer = document.querySelector('#country-explorer')

    if (explorer) {
      window.dataAssets = '/frontex-assets/'
      explorer.classList.add('min-vh-100', 'd-flex')

      const stats = document.querySelector('#fx-stats')
      stats.parentElement.classList.add('flex-grow-1', 'd-flex', 'flex-column')
      stats.classList.add(
        'flex-grow-1',
        'd-flex',
        'flex-column',
        'justify-content-between'
      )
    }
  }
})
