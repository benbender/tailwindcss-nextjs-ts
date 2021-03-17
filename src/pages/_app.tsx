import { NextComponentType, NextPage, NextPageContext } from "next";
import { AppProps as NextAppProps } from "next/app";

import "tailwindcss/tailwind.css";
// import "assets/css/app.css";

export type AppProps<P = Record<string, unknown>> = {
  Component: NextComponentType<NextPageContext, any, P>;
} & NextAppProps<P>;

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
