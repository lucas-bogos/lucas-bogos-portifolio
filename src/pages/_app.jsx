import '../styles/globals.css'
import Layout from "../components/Layout"

export default ({ Component, pageProps }) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout> 
}