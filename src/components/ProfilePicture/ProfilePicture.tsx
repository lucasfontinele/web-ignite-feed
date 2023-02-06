import clsx from 'clsx'
import { ProfilePictureProps, TEST_ID } from './ProfilePicture.misc'
import styles from './ProfilePicture.module.css'

export const ProfilePicture = ({ src, variant = 'highlight' }: ProfilePictureProps) => {
  const variantControl = variant === 'highlight' ? styles.highlighted : styles.default

  return (
    <img data-testid={TEST_ID} className={clsx(styles.picture, variantControl)} src={src} />
  )
}
