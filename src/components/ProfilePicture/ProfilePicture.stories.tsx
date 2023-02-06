import { Meta, Story } from '@storybook/react'
import { ProfilePicture, ProfilePictureProps } from '.'

export default {
  title: 'components/ProfilePicture',
  component: ProfilePicture
} as Meta<typeof ProfilePicture>

export const Default: Story<ProfilePictureProps> = (args: ProfilePictureProps) => <ProfilePicture {...args} />

Default.args = {
  src: "https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg",
  variant: 'normal'
}

export const Highlighted: Story<ProfilePictureProps> = (args: ProfilePictureProps) => <ProfilePicture {...args} />

Highlighted.args = {
  src: "https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg",
  variant: 'highlight',
}
