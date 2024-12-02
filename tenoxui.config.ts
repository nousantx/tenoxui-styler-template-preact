import { Config, createProperty } from '@nousantx/tenoxui-styler'
import { property as txProps } from '@tenoxui/property'
import { components } from '@nousantx/tenoxui-utility-styles'

const config: Config = {
  property: {
    ...txProps,
    ...createProperty({ bg: 'backgroundColor', text: 'color' }, 'rgb({0} / var(--{1}-opacity, 1))'),
    bgc: 'backgroundColor'
  },
  values: {
    family: {
      sans: 'inter, sans-serif',
      h: 'poppins, sans-serif',
      code: "'JetBrains Mono', monospace"
    }
  },
  aliases: { ...components.btn, ...components.text },
  color: {
    primary: '#c1ff12',
    secondary: '#f76cfe',
    neutral: '#575757'
  }
}

export default config
