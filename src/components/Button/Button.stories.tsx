import { Meta, Story } from '@storybook/react'
import { Button } from './Button'
import { ButtonProps, StyleVariant } from './Button.misc'
import { FaEdit } from 'react-icons/fa'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

export const Default: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

Default.args = {
  title: 'Button test',
};

export const Outlined: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

Outlined.args = {
  title: 'Outlined button',
  variant: StyleVariant.outlined,
}

export const WithIcon: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

WithIcon.args = {
  title: 'Edit your profile',
  variant: StyleVariant.outlined,
  icon: <FaEdit size={20} />
}

export const Disabled: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

Disabled.args = {
  title: 'Disabled button',
  disabled: true,
  variant: StyleVariant.contained,
}

export const Loading: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

Loading.args = {
  title: 'Publish',
  loading: true,
  variant: StyleVariant.contained,
}
