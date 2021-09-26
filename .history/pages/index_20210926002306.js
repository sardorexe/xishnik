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
            style={{ objectFit: "cover", height: "100%", width: "40%" }}
            src="/background.mp4"
          ></video>
          .
        </div>
      </header>
    </>
  );
}


