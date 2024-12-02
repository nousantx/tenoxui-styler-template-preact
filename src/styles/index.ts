import { useLayoutEffect } from 'preact/hooks'
import { init, createConfig } from '@nousantx/tenoxui-styler'
import config from '../../tenoxui.config'

export const styler = () => {
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'child',
      `
        (body): family-sans bg-neutral-950 text-neutral-50;
        (button,input): family-inherit;
      `
    )
    init(createConfig(config))
  }, [])
}
