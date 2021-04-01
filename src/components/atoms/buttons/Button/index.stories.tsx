import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'atoms/buttons/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <>
    <div className="p-1">
      <Button {...args} buttonSize="lg" label="Large Button" labelSize="2xl" />
    </div>
    <div className="p-1">
      <Button {...args} buttonSize="md" label="Medium Button" />
    </div>
    <div className="p-1">
      <Button {...args} buttonSize="sm" label="Small Button" labelSize="sm" />
    </div>
  </>
)

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Dark = Template.bind({})
Dark.args = {
  color: 'dark',
}

export const Outlined = Template.bind({})
Outlined.args = {
  outlined: true,
}

export const Rounded = Template.bind({})
Rounded.args = {
  rounded: true,
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'upload',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
