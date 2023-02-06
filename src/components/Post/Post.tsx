import { ProfilePicture } from '../ProfilePicture'
import { TEST_IDS } from './Post.misc'
import type { PostProps } from './Post.misc'
import styles from './Post.module.css'

export const Post = ({ author, content, createdAt, tags }: PostProps) => {
  return (
    <article className={styles.container}>
      <header>
        <div className={styles.headerWrapper}>
          <div className={styles.authorContainer}>
            <ProfilePicture src={author.profilePicture} variant="highlight" />
            <div className={styles.authorProfileWrapper}>
              <strong data-testid={TEST_IDS.POST_AUTHOR_NAME}>{author.name}</strong>
              <p data-testid={TEST_IDS.POST_AUTHOR_BIO}>{author.bio}</p>
            </div>
          </div>
          <time data-testid={TEST_IDS.POST_CREATED_DATE} title="06 de Fevereiro às 16:06">{createdAt}</time>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <p data-testid={TEST_IDS.POST_CONTENT}>{content}</p>

        <div data-testid={TEST_IDS.POST_TAGS} className={styles.tagsContainer}>
          {tags.map(tag => (
            <a href="" key={tag}>{tag}</a>
          ))}
        </div>
      </div>
    </article>
  )
}
