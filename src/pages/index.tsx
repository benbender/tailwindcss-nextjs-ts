import { NextPage } from "next";
import Head from "next/head";
import styles from "assets/css/Home.module.css";

const HomePage: NextPage = () => (
  <div className="container flex flex-col items-center justify-center min-h-screen">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="This is an example of a meta description. This will often show up in search results."
      />
    </Head>

    <main className="flex flex-1 flex-col items-center justify-center">
      <h1 className="mb-8 text-center text-6xl font-black tracking-wider">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <h2 className="text-center text-xl font-semibold">
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </h2>

      <div className="grid gap-6 grid-cols-1 max-w-3xl md:grid-cols-2 md:my-24">
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img
          src="/vercel.svg"
          alt="Vercel Logo"
          width="70"
          height="16"
          className={styles.logo}
        />
      </a>
    </footer>
  </div>
);

export default HomePage;
