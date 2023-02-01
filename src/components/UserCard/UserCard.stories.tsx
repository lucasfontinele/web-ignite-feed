import { Meta, Story } from '@storybook/react'
import { UserCard, UserCardProps } from '.'

export default {
  title: 'components/UserCard',
  component: UserCard,
} as Meta<typeof UserCard>

export const Default: Story<UserCardProps> = (args: UserCardProps) => <UserCard {...args} />

Default.args = {
  name: 'John Doe',
  bio: 'Software Engineer',
  coverUrl: 'https://images.unsplash.com/photo-1595254482167-387aedc271b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  pictureUrl: 'https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg',
  profileUrl: 'https://github.com/john-doe',
}
