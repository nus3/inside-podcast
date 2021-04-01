import classNames from 'classnames'
import {
  RiAlertFill,
  RiAlertLine,
  RiArrowDownSLine,
  RiArrowGoBackLine,
  RiArrowLeftSLine,
  RiArrowRightCircleLine,
  RiArrowRightSFill,
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiCheckLine,
  RiCloseCircleLine,
  RiCloseLine,
  RiDashboardFill,
  RiDownload2Fill,
  RiExternalLinkLine,
  RiFileAddLine,
  RiFileExcel2Line,
  RiFileExcelFill,
  RiFileExcelLine,
  RiMapPin2Line,
  RiSkipForwardFill,
  RiTimeLine,
  RiUpload2Line,
} from 'react-icons/ri'
import { Color, FontSize } from 'types/tailwind'

import styles from './index.module.css'

type SvgIconProps = {
  /**
   * css class
   */
  className?: string
  /**
   * アクセシビリティ用
   */
  title?: string
  /**
   * mouseイベントハンドラ
   */
  onMouseEnter?: () => void
  /**
   * mouseイベントハンドラ
   */
  onMouseLeave?: () => void
  /**
   * mouseイベントハンドラ
   */
  onFocus?: () => void
  /**
   * mouseイベントハンドラ
   */
  onBlur?: () => void
}

// HACK: わざわざアイコンを都度定義しなくてもいいように抽象化したい
// via: https://github.com/react-icons/react-icons
const CheckIcon = (props: SvgIconProps) => <RiCheckLine {...props} />
const WarningIcon = (props: SvgIconProps) => <RiAlertLine {...props} />
const WarningFillIcon = (props: SvgIconProps) => <RiAlertFill {...props} />
const CloseCircleIcon = (props: SvgIconProps) => (
  <RiCloseCircleLine {...props} />
)
const CloseIcon = (props: SvgIconProps) => <RiCloseLine {...props} />
const TimeIcon = (props: SvgIconProps) => <RiTimeLine {...props} />
const MapPinIcon = (props: SvgIconProps) => <RiMapPin2Line {...props} />
const SkipForwardIcon = (props: SvgIconProps) => (
  <RiSkipForwardFill {...props} />
)
const ExcelFileIcon = (props: SvgIconProps) => <RiFileExcelLine {...props} />
const ExcelFileFillIcon = (props: SvgIconProps) => (
  <RiFileExcelFill {...props} />
)
const FileExcelIcon = (props: SvgIconProps) => <RiFileExcel2Line {...props} />
const FileAddIcon = (props: SvgIconProps) => <RiFileAddLine {...props} />
const ArrowDownIcon = (props: SvgIconProps) => <RiArrowDownSLine {...props} />
const ArrowUpIcon = (props: SvgIconProps) => <RiArrowUpSLine {...props} />
const ArrowLeftIcon = (props: SvgIconProps) => <RiArrowLeftSLine {...props} />
const ArrowRightIcon = (props: SvgIconProps) => <RiArrowRightSLine {...props} />
const ArrowRightFillIcon = (props: SvgIconProps) => (
  <RiArrowRightSFill {...props} />
)
const ArrowGoBackIcon = (props: SvgIconProps) => (
  <RiArrowGoBackLine {...props} />
)
const ArrowRightCircle = (props: SvgIconProps) => (
  <RiArrowRightCircleLine {...props} />
)
const DashboardIcon = (props: SvgIconProps) => <RiDashboardFill {...props} />
const UploadIcon = (props: SvgIconProps) => <RiUpload2Line {...props} />
const DownloadIcon = (props: SvgIconProps) => <RiDownload2Fill {...props} />
const ExternalIcon = (props: SvgIconProps) => <RiExternalLinkLine {...props} />

export const icons = {
  check: CheckIcon,
  warning: WarningIcon,
  warningFill: WarningFillIcon,
  closeCircle: CloseCircleIcon,
  close: CloseIcon,
  time: TimeIcon,
  mapPin: MapPinIcon,
  skipForward: SkipForwardIcon,
  excelFile: ExcelFileIcon,
  excelFileFill: ExcelFileFillIcon,
  fileExcel: FileExcelIcon,
  fileAdd: FileAddIcon,
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowRightFill: ArrowRightFillIcon,
  arrowGoBack: ArrowGoBackIcon,
  arrowRightCircle: ArrowRightCircle,
  dashboard: DashboardIcon,
  upload: UploadIcon,
  download: DownloadIcon,
  external: ExternalIcon,
} as const

export type IconType = keyof typeof icons

export interface IconProps {
  /**
   * アイコン名
   */
  name: IconType
  /**
   * フォントサイズ
   */
  fontSize?: FontSize
  /**
   * 色
   */
  color?: Color
  /**
   * アクセシビリティ用
   */
  title?: string
  /**
   * iconにenter(onMouseEnter, onFocus)した時のイベントハンドラ
   */
  onEnter?: () => void
  /**
   * iconにleave(onMouseLeave, onBlur)した時のイベントハンドラ
   */
  onLeave?: () => void
}

export const Icon = ({
  name,
  title,
  fontSize = 'base',
  color = 'gray-text',
  onEnter,
  onLeave,
}: IconProps): JSX.Element => {
  const objClass = classNames(styles.icon, `text-${fontSize}`, `text-${color}`)
  const IconComponent = icons[name]

  return (
    <IconComponent
      className={objClass}
      title={title}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    />
  )
}
