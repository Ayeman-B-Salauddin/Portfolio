import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ayeman</title>
        <meta name="description" content="Portfolio of Ayeman Bin Salauddin" />
      </Head>
    </div>
  );
};

export default Home;
