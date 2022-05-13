import Menubar from "./patterns/Menubar";
import Footer from "./patterns/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return <div>
    <Head>
      <title>Lucas Bogos: Programador Web Frontend e Backend - Build The Future With Conscience</title>
      <meta name="description" content="Contrate um serviço de qualidade de tecnologia, onde faz uso de tecnologias modernas e boas práticas" />
      <meta name="robots" content="index, follow" />
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