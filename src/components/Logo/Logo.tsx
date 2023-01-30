import styles from './Logo.module.css'

export const Logo = () => {
  return (
    <img
      data-testid="logo"
      className={styles.igniteSymbol}
      alt="ignite-symbol"
      src="/ignite-icon.svg"
    />
  );
}
