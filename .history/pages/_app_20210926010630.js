import "../styles/globals.css";
import Layout from "../comps/layout";
import Head from 

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
