import { Meta, Story } from '@storybook/react'
import { Home } from '.'

export default {
  title: 'pages/Home',
  component: Home,
} as Meta<typeof Home>

export const Default: Story = () => <Home />
