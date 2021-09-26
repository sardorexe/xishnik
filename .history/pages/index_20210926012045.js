import Head from "next/head";
import Header from "../comps/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Xishnik</title>
        <meta name="description" content="Xishnik gang bang" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Buenard:wght@700&family=Inter:wght@100;200;300&family=Poppins:wght@700;800;900&display=swap&family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
      </Head>
     <Header />
    </>
  );
}
