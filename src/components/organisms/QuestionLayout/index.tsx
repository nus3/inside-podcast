import { ReactNode } from 'react'

import styles from './style.module.css'

export type QuestionLayoutProps = {
  children: ReactNode
}

export const QuestionLayout = ({
  children,
}: QuestionLayoutProps): JSX.Element => (
  <main className={styles.wrap}>{children}</main>
)
