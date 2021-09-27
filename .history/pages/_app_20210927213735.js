import "../styles/globals.css";
import Layout from "../comps/layout";
import Head from "next/head";
import AOS from 'aos'

import "aos/dist/aos.css"
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    
  })
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
