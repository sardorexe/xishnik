import "../styles/globals.css";
import Layout from "../comps/layout";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
