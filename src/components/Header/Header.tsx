import { Logo } from "../Logo"

import styles from './Header.module.css'

export type HeaderProps = {
  onLogout: () => void
}

export const Header = ({ onLogout }: HeaderProps) => {
  return (
    <header className={styles.container} data-testid="app-header" role="heading">
      <div />

      <div className={styles.logoContainer}>
        <Logo />
        <b className={styles.heading}>Ignite Feed</b>
      </div>

      <button
        onClick={onLogout}
        type="button"
        className={styles.logoutButton}
      >
        Sair
      </button>
    </header>
  )
}