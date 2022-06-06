import Form from '../components/Form'
import Meta from '../layouts/Meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta description='Descendance de Jean-Baptiste Medoung' />

      <main className={styles.main}>
        <Form />
      </main>

      
    </div>
  )
}
