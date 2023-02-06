import { Meta, Story } from '@storybook/react'
import { Post, PostProps } from '.'
import { POST_MOCK } from './Post.misc'
import styles from './Post.module.css'

export default {
  title: 'components/Post',
  component: Post
} as Meta<typeof Post>

export const Default: Story<PostProps> = (args) => (
  <div className={styles.storybookContainer}>
    <Post {...args} />
  </div>
)

Default.args = {
  ...POST_MOCK,
}
