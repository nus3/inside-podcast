import { Meta, Story } from '@storybook/react'

import { Text, TextProps } from '.'

export default {
  title: 'atoms/texts/Text',
  component: Text,
} as Meta

const Template: Story<TextProps> = (args: TextProps) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'sample text',
}
