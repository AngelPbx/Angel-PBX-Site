import "@/styles/globals.css";
import "../public/assets/css/style.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import store from "../components/store";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />         
        </Head>
        <Header />
        <Component {...pageProps} />

        <Footer />

        {/* Asynchronously load the Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive" // Load the script after the page is interactive
        />
      </>
    </Provider>
  );
}
