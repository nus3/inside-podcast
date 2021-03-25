export const createStorybookTemplate = (
  path: string,
  name: string,
): string => `import { Meta, Story } from '@storybook/react'

import { ${name}, ${name}Props } from '.'

export default {
  title: '${path}/${name}',
  component: ${name},
} as Meta

const Template: Story<${name}Props> = (args: ${name}Props) => (
  <${name} {...args} />
)

export const Default = Template.bind({})
Default.args = {};
`
