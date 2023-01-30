import { Meta, Story } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'components/Logo',
  component: Logo,
} as Meta<typeof Logo>

export const Default: Story = () => <Logo />
