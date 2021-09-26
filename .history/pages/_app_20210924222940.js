import '../styles/globals.css'
import Layout from '../comps/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout></Layout>
    <Component {...pageProps} />
    )
}

export default MyApp
