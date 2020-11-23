import "./global.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kerem Sevencan | Digital Experience Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
