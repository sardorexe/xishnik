import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xishnik</title>
        <meta name="description" content="Xishnik gang bang" />
      </Head>
      <video loop muted src="/background.mp4"></video>
      
    </div>
  )
}
