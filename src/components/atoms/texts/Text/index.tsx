import classNames from 'classnames'
import { ReactNode } from 'react'
import { Color, FontSize, Opacity } from 'types/tailwind'

import styles from './index.module.css'

export type TextProps = {
  /**
   * テキスト
   */
  children: ReactNode
  /**
   * フォントサイズ
   */
  fontSize?: FontSize
  /**
   * 色
   */
  color?: Color
  /**
   * 太字
   */
  bold?: boolean
  /**
   * 透明度
   */
  opacity?: Opacity
}

export const Text = ({
  children,
  fontSize = 'base',
  color = 'gray-text',
  bold,
  opacity,
}: TextProps): JSX.Element => {
  const spanClass = classNames(
    styles.wrap,
    `text-${fontSize}`,
    `text-${color}`,
    {
      ['font-bold']: bold,
      [`text-opacity-${opacity}`]: opacity,
    },
  )
  return <span className={spanClass}>{children}</span>
}
