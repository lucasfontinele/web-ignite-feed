import { ProfilePictureProps, TEST_ID } from './ProfilePicture.misc'
import styles from './ProfilePicture.module.css'

export const ProfilePicture = ({ src }: ProfilePictureProps) => {
  return (
    <img data-testid={TEST_ID} className={styles.picture} src={src} />
  )
}
