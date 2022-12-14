// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </>
  );
}

export default MyApp;
