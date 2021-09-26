import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xishnik</title>
        <meta name="description" content="Xishnik gang bang" />
      </Head>
      <div style={{ width: "70%", height: "100vh" }}>
        <video
          loop
          muted
          autoPlay
          style={{ objectFit: "cover", height: "100%", width: "100%", transform: "scale(1.1)", }}
          src="/background.mp4"
        ></video>
      </div>
    </div>
  );
}
