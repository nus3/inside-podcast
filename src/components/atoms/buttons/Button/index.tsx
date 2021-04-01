import classNames from 'classnames'
import { Icon, IconType } from 'components/atoms/Icon'
import { Text } from 'components/atoms/texts/Text'
import { Color, FontSize } from 'types/tailwind'

import styles from './index.module.css'

type ButtonSize = 'sm' | 'md' | 'lg'
// NOTE: 命名は Bootstrap のテーマカラー参考 https://getbootstrap.com/docs/4.0/getting-started/theming/#theme-colors
type ButtonColor = 'primary' | 'secondary' | 'dark'

export type ButtonProps = {
  /**
   * 色
   */
  color?: ButtonColor
  /**
   * ボタンの表示文字列
   */
  label?: string
  /**
   * label のフォントサイズ
   */
  labelSize?: FontSize
  /**
   * アイコン
   */
  icon?: IconType
  /**
   * ボタンの余白サイズ
   */
  buttonSize?: ButtonSize
  /**
   * ボタンのタイプが submit かどうか
   */
  submit?: boolean
  /**
   * クリックハンドラー
   */
  onClick?: () => void
  /**
   * 角を丸くするかどうか
   */
  rounded?: boolean
  /**
   * 境界線をつけるかどうか
   * 背景色が白になり、境界線とテキストの色がcolorになる
   */
  outlined?: boolean
  /**
   * 利用可能かどうか
   */
  disabled?: boolean
}

const labelStyles: {
  [key in ButtonColor]: { base: Color; outlined: Color }
} = {
  primary: { base: 'white', outlined: 'primary' },
  secondary: { base: 'primary', outlined: 'basic' },
  dark: { base: 'white', outlined: 'black-cancel' },
}

const labelColorClass = (
  color?: ButtonColor,
  outlined?: boolean,
  disabled?: boolean,
): Color => {
  if (disabled) return 'gray-text'

  const c = color || 'primary'
  if (outlined) return labelStyles[c].outlined

  return labelStyles[c].base
}

export const Button = ({
  color = 'primary',
  label,
  labelSize = 'base',
  icon,
  buttonSize = 'md',
  submit,
  onClick = () => null,
  rounded,
  outlined,
  disabled,
}: ButtonProps): JSX.Element => {
  const btnClass = classNames(
    styles.basic,
    styles[`size-${buttonSize}`],
    styles[`color-${color}`],
    {
      [styles.round]: rounded,
      [styles.outlined]: outlined,
      [styles.disabled]: disabled,
    },
  )

  const labelColor = labelColorClass(color, outlined, disabled)

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles['label-wrap']}>
        {icon && <Icon name={icon} fontSize={labelSize} color={labelColor} />}
        <Text
          fontSize={labelSize}
          color={labelColor}
          opacity={disabled ? 25 : undefined}
        >
          {label}
        </Text>
      </span>
    </button>
  )
}
