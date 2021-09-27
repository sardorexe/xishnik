import Head from "next/head";
import Biography from "../comps/Biography";
import Gallery from "../comps/Gallery";
import Header from "../comps/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Xishnik</title>
        <meta name="description" content="Xishnik gang bang" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&family=Poppins:wght@300;400;500;700&family=Quicksand:wght@700&display=swap&family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <Header />
      <Biography />
      <Gallery />
    </>
  );
}
