import type { NextPage } from "next";
import Head from "next/head";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Works } from "../components/Works";

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
        <Works />
        <Form />
      </body>
    </div>
  );
};

export default Home;
