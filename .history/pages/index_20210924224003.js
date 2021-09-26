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
      <div className={styles.container}></div>
    </>
  );
}

{
  /* <div style={{ width: "30%", height: "100vh", position: "absolute", top: "0" }}>
  <video
    loop
    muted
    autoPlay
    style={{ objectFit: "cover", height: "100%", width: "100%" }}
    src="/background.mp4"
  ></video>
</div> */
}
