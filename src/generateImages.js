import path from 'path'
import fs from 'fs/promises'
import { createServer } from 'vite'
import playwright from 'playwright'
import viteConfig from '../vite.config.js'
import { fileURLToPath } from 'url'

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
  mode: 'production',
  server: { port }
})
await server.listen()

const browser = await playwright.chromium.launch()
const context = await browser.newContext({
  deviceScaleFactor: 3
})
context.addInitScript(
  () => {
    document.querySelector('#fds-styles').remove()

    const inter = document.createElement('script')
    inter.src = '/node_modules/@fontsource/inter/index.css'
    inter.type = 'module'
    document.head.appendChild(inter)
  },
  { type: 'module' }
)

const page = await context.newPage()
await page.goto(`http://localhost:${port}`)
await page.waitForLoadState('domcontentloaded')

await page.evaluate(async () => {
  document.querySelector('#app').style.width = '1000px'
  document.querySelector('.box-card').classList.remove('border-blue')

  document
    .querySelector('#fx-country-selector')
    .classList.remove('dropdown-toggle')

  const fdsStyles = document.createElement('link')
  fdsStyles.href =
    'https://api.allorigins.win/raw?url=https://static.frag-den-staat.de/static/css/main.css'
  fdsStyles.rel = 'stylesheet'
  document.head.appendChild(fdsStyles)

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

  window.twemoji = (await import('/node_modules/.vite/deps/twemoji.js')).default
})

for (const language of ['en', 'de']) {
  await page.evaluate(language => {
    document.documentElement.lang = language
  }, language)

  for (const country of countries) {
    await page.evaluate(async country => {
      const { setCountry } = await import('/src/components.js')
      setCountry(country)

      window.twemoji.parse(document.body)
    }, country)

    await page.locator('#app').screenshot({
      path: path.resolve(distDir, `${country.code}-${language}.png`),
      omitBackground: true
    })

    console.log('Rendered', country.name.en)
    break
  }
}

await browser.close()
await server.close()
