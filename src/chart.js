import embed from 'vega-embed'
import { expressionInterpreter } from 'vega-interpreter'
import { i18n } from './utils.jsx'
import assets from './assets.json'

export function makeChart(el, country, group) {
  console.log(group, i18n('groups', group, 'title'))
  const data = assets[country.code]
    .map(df => ({
      index: df.year,
      value: df[group]
    }))
    .sort((a, b) => a.year - b.year)

  const years = assets[country.code].map(df => df.year)

  const axis = {
    labelColor: 'var(--gray-600)',
    gridColor: 'var(--gray-100)',
    domainColor: 'transparent',
    tickColor: 'var(--gray-200)',
    tickCount: 2
  }

  /** @type import('vega-embed').VisualizationSpec */
  const spec = {
    width: 'container',
    config: {
      view: { continuousWidth: 400, continuousHeight: 80 },
      line: { point: true }
    },
    layer: [
      {
        mark: {
          type: 'line',
          interpolate: 'linear'
        },
        encoding: {
          color: { value: 'var(--blue-30)' },
          x: {
            axis: {
              format: '',
              ...axis
            },
            field: 'index',
            scale: { domain: [Math.min(...years), Math.max(...years)] },
            title: '',
            type: 'quantitative'
          },
          y: {
            field: 'value',
            type: 'quantitative',
            title: '',
            axis
          },
          tooltip: [
            {
              field: 'value',
              title: i18n('groups', group, 'title')
            }
          ]
        }
      }
    ],
    data: {
      name: 'data',
      values: data
    },
    $schema: 'https://vega.github.io/schema/vega-lite/v5.2.0.json'
  }

  embed(el, spec, {
    ast: true,
    expr: expressionInterpreter,
    renderer: 'svg',
    actions: false
  })
}
