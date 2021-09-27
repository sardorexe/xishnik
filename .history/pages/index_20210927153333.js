import Head from "next/head";
import Biography from "../comps/Biography";
import Header from "../comps/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Xishnik</title>
        <meta name="description" content="Xishnik gang bang" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&family=Poppins:wght@300;400;500;700&family=Quicksand:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
     <Header />
     <Biography />
    </>
  );
}
