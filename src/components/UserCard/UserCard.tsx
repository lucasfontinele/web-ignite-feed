import { FaEdit } from 'react-icons/fa'
import { UserCardProps } from '.'
import { Button, StyleVariant } from '../Button'
import styles from './UserCard.module.css'
import { ProfilePicture } from '../ProfilePicture'

export const UserCard = ({
  name,
  bio,
  coverUrl,
  pictureUrl,
  profileUrl
}: UserCardProps) => {
  return (
    <article
      data-testid="user-card"
      role="article"
      className={styles.container}
    >
      <img
        src={coverUrl}
        data-testid="user-card-cover"
        className={styles.cover}
      />
      <div data-testid="user-card-picture" className={styles.profilePictureContainer}>
        <ProfilePicture src={pictureUrl} />
      </div>

      <div className={styles.content}>
        <p data-testid="user-card-name" className={styles.name}>
          {name}
        </p>
        <p data-testid="user-card-bio" className={styles.bio}>
          {bio}
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.buttonContainer}>
        <Button
          icon={<FaEdit size={20} />}
          variant={StyleVariant.outlined}
          title="Editar seu perfil"
          data-testid="user-card-profileUrl"
        />
      </div>
    </article>
  )
}
