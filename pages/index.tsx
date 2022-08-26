import { createClient } from "contentful";
import type { NextPage } from "next";
import Head from "next/head";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Works } from "../components/Works";

export async function getStaticProps() {
  const client = createClient({
    //@ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    //@ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "projects",
    // order: "sys.createdAt",
  });

  return {
    props: {
      projects: res.items,
      revalidate: 60 * 60,
    },
  };
}

const Home: NextPage = ({ projects }: any) => {
  return (
    <div>
      <Head>
        <title>Ayeman</title>
        <meta name="description" content="Portfolio of Ayeman Bin Salauddin" />
        <link
          rel="icon"
          href="https://img.icons8.com/ios-filled/18/000000/dryclean-with-any-solvent.png"
        />
      </Head>

      <div className="bg-body text-white font-poppins pb-12">
        <Header />
        <Hero />
        <Works projects={projects} />
        <Form />
      </div>
    </div>
  );
};

export default Home;
