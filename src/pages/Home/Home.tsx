import { Header } from '../../components/Header'
import { Post, POST_MOCK } from '../../components/Post'
import { UserCard, mock as USER_CARD_MOCK } from '../../components/UserCard'
import styles from './Home.module.css'

const handleAlertUser = () => {
  alert("Deseja realmente sair?")
}

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header onLogout={handleAlertUser} />

      <main className={styles.main}>
        <aside>
          <UserCard {...USER_CARD_MOCK} />
        </aside>

        <div className={styles.postsContainer}>
          <Post {...POST_MOCK} />
          <Post {...POST_MOCK} />
          <Post {...POST_MOCK} />
        </div>
      </main>
    </div>
  )
}
