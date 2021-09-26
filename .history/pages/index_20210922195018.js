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
      <div></div>
      <video loop muted autoPlay style={{objectFit: "cover"}} src="/background.mp4"></video>
      
    </div>
  )
}