import { existsSync, mkdirSync, writeFileSync } from 'fs'

import {
  createComponentTemplate,
  createStorybookTemplate,
  createStyleTemplate,
} from './templates'

const getArgValue = (arg: string): { name: string; value: string } => {
  const initStr = arg.slice(0, 2)
  if (initStr !== '--') {
    throw new Error('引数がおかしいでヤンス。「--」で指定してほしいでヤンス')
  }

  const equalIndex = arg.indexOf('=')
  if (equalIndex === -1) {
    throw new Error(
      '引数の指定方法がおかしいでヤンス。「--component=atoms --name=ComponentName」にしてほしいでやんす',
    )
  }
  const name = arg.slice(2, equalIndex)
  if (name.length === 0) {
    throw new Error('引数がないでヤンス')
  }
  if (name !== 'component' && name !== 'name') {
    throw new Error(
      '引数が違うでヤンス。「--component=atoms --name=ComponentName」にしてほしいでやんす',
    )
  }

  const value = arg.slice(equalIndex + 1, arg.length)
  if (value.length === 0) {
    throw new Error('引数の値がないでヤンス')
  }

  return { name, value }
}

const validateArgs = (args: string[]) => {
  if (args.length !== 5) {
    throw new Error(
      '引数の数が正しくないでゲス。--componentと--nameを指定してほしいでゲス',
    )
  }
}

const main = () => {
  try {
    validateArgs(process.argv)
    const pathName = getArgValue(process.argv[3])
    const componentName = getArgValue(process.argv[4])
    const path = `src/components/${pathName.value}/${componentName.value}`
    if (!existsSync(path)) {
      mkdirSync(path, {
        recursive: true,
      })
    }
    writeFileSync(
      `${path}/index.tsx`,
      createComponentTemplate(componentName.value),
    )
    writeFileSync(`${path}/index.module.css`, createStyleTemplate())
    writeFileSync(
      `${path}/index.stories.tsx`,
      createStorybookTemplate(pathName.value, componentName.value),
    )
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

main()
