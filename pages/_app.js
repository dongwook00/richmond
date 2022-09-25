import { AppWrapper } from "../context/AppContext";
import HTMLHead from "../components/HTMLHead";
import Layout from "../components/Layout";

import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
          <HTMLHead />
         <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;
