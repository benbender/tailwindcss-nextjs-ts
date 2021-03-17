import { NextPage } from "next";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.json";
import "tailwindcss/tailwind.css";
import "assets/css/app.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default App;
