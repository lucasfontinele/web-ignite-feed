import { Meta, Story } from '@storybook/react'

import { Header, HeaderProps } from './Header'

export default {
  title: 'components/Header',
  component: Header,
} as Meta<typeof Header>

export const Default: Story<HeaderProps> = () => <Header onLogout={() => {}} />
