import '../styles/globals.css'
import Layout from "../components/Layout"

const app = ({ Component, pageProps }) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout> 
}

export default app;