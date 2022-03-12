import Menubar from "./patterns/Menubar"
import Footer from "./patterns/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return <div>
    <Head>
      <title>Lucas Bogos: Programador Web Frontend e Backend</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.png"/>
    </Head>
    <Menubar />
    <main className="main_content">{children}</main>
    <Footer />
    <style jsx>{`
      .main_content {
          min-height: 90vh;
      }
    `}</style>
  </div>
}

export default Layout;