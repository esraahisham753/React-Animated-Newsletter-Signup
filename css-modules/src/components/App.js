import Head from "next/head";

import Newsletter from "./Newsletter.js";
import * as css from "./NewsletterOverride.module.css";

import { ThemeProvider } from "@friendsofreactjs/react-css-themr";

function App() {
  return (
    <div className="app__newsletter">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>CSS Modules Example</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Newsletter />
      </ThemeProvider>
    </div>
  );
}

export default App;
