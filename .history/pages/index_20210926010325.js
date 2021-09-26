import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Xishnik</title>
        <meta name="description" content="Xishnik gang bang" />
      </Head>
      <header className={styles.header}>
        <div className={styles.background}>
          <video
            loop
            muted
            autoPlay
            style={{
              objectFit: "cover",
              height: "100%",
              width: "40%",
              opacity: "0.6",
            }}
            src="/background.mp4"
          ></video>
        </div>
        <div className={styles.content}>
          <div className={styles.textContent}></div>
          <h1>XISHNIK GANG</h1>
          <li> -- Lorem ipsum.</li>
        </div>
      </header>
    </>
  );
}
