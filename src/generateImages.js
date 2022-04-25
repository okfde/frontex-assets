import path from 'path'
import fs from 'fs/promises'
import { createServer } from 'vite'
import playwright from 'playwright'
import viteConfig from '../vite.config.js'
import { fileURLToPath } from 'url'

const dev = process.env.NODE_ENV === 'development'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const countries = JSON.parse(
  await fs.readFile(path.join(__dirname, 'countries.json'), {
    encoding: 'utf-8'
  })
)

const distDir = path.resolve(process.cwd(), 'dist', 'assets', 'countries')
await fs.mkdir(distDir, { recursive: true })

const port = 58234
const server = await createServer({
  ...viteConfig,
  server: { port }
})
await server.listen()

const browser = await playwright.chromium.launch({
  headless: !dev,
  args: ['--disable-web-security'] // disable cors to load FdS assets
})
const context = await browser.newContext({
  deviceScaleFactor: 3
})
context.addInitScript(
  () => {
    document.querySelector('#fds-styles').remove()
    document.querySelector('#fds-scripts').remove()

    const fdsScripts = document.createElement('script')
    fdsScripts.src = 'https://static.frag-den-staat.de/static/js/main.js'
    document.body.appendChild(fdsScripts)

    const fdsStyles = document.createElement('link')
    fdsStyles.href = 'https://static.frag-den-staat.de/static/css/main.css'
    fdsStyles.rel = 'stylesheet'
    document.head.appendChild(fdsStyles)
  },
  { type: 'module' }
)

const page = await context.newPage()
await page.goto(`http://localhost:${port}/explorer.html`)
await page.waitForLoadState('domcontentloaded')

await page.evaluate(async () => {
  document.querySelector('#country-explorer').style.width = '750px'
  document.querySelector('.box-card').classList.remove('border-blue')

  document
    .querySelector('#fx-country-selector')
    .classList.remove('dropdown-toggle')

  const emoji = document.createElement('style')
  emoji.innerHTML = `
    img.emoji {
      height: 1em;
      width: 1em;
      margin: 0 0.05em 0 0.1em;
      vertical-align: -0.1em;
    }  
  `
  document.head.appendChild(emoji)

  const logo = document.createElement('img')
  logo.src = 'https://static.frag-den-staat.de/static/img/header_logo.svg'
  logo.classList.add('ml-auto')

  const attribution = document.querySelector('#fx-attribution')
  attribution.nextElementSibling.remove()
  attribution.after(logo)

  window.twemoji = (await import('/src/utils.jsx')).twemoji
})

for (const language of ['en', 'de']) {
  await page.evaluate(async language => {
    const { setLanguage } = await import('/src/utils.jsx')
    setLanguage(language)
  }, language)

  for (const country of countries) {
    await page.evaluate(async country => {
      const { setCountry } = await import('/src/countryExplorer.jsx')
      setCountry(country)

      document
        .querySelectorAll('button[data-toggle="modal"]')
        .forEach(el => el.remove())
      window.twemoji.parse(document.body)
    }, country)

    await page.locator('#country-explorer').screenshot({
      path: path.resolve(distDir, `${country.code}-${language}.png`),
      omitBackground: true
    })

    console.log('Rendered', country.name.en)
  }
}

if (!dev) {
  await browser.close()
  await server.close()
}
