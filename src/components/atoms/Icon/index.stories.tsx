import { Meta } from '@storybook/react'

import { Icon, IconProps, icons } from '.'

export default {
  title: 'atoms/Icon',
  component: Icon,
} as Meta

export const All = (): JSX.Element => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
    {Object.keys(icons).map((icon) => (
      <div
        key={icon}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Icon name={icon as IconProps['name']} />
        <span style={{ fontSize: 12 }}>{icon}</span>
      </div>
    ))}
  </div>
)
