import BSN from 'bootstrap.native/dist/bootstrap-native-v4.js'
window.BSN = BSN

console.log('in iframe?', window !== window.parent)
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
