import config from '../../tailwind.config'

export type FontSize = keyof typeof config.theme.fontSize
export type Color = keyof typeof config.theme.colors
export type Opacity = keyof typeof config.theme.opacity
