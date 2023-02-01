import clsx from 'clsx'
import { FaSpinner } from 'react-icons/fa'
import { ButtonProps, StyleVariant } from './Button.misc'
import styles from './Button.module.css'

export const Button = ({
  children = null,
  icon = null,
  title = '',
  variant = StyleVariant.contained,
  type = 'button',
  loading = false,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.container, styles[StyleVariant[variant]])}
      data-testid="button"
      type={type}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <FaSpinner className={styles.loading} size={20} /> : icon}
      {children}
      <span>{title}</span>
    </button>
  )
}
