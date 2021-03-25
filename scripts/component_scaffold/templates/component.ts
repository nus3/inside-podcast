export const createComponentTemplate = (
  name: string,
): string => `// import classnames from 'classnames';
// import styles from './index.module.css'

export type ${name}Props = {
  /**
   * 説明
   */
  name: string
}

export const ${name} = ({ name }: ${name}Props): JSX.Element => {
  return (
    <>
      <p>{name}</p>
    </>
  )
}
`
