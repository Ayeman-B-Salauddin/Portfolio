import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ayeman</title>
        <meta name="description" content="Portfolio of Ayeman Bin Salauddin" />
      </Head>
      <body className="bg-body text-white font-poppins pb-12">
        <Header />
        <Hero />
      </body>
    </div>
  );
};

export default Home;
