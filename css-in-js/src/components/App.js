import React from "react";
import { ThemeProvider } from "styled-components";

import Head from "next/head";
import Newsletter from "./Newsletter.js";

const theme = {
  header: {
    fg: "#ff598a",
  },
  input: {
    color: "#fff",
    background: "#070222",
    textAlign: "center",
  },
  inputFocus: {
    outline: "2px solid #5e9fff",
  },
};

function App() {
  return (
    <div className="app__newsletter">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>CSS-in-JS Example</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Newsletter />
      </ThemeProvider>
      <style jsx>{`
        .app__newsletter {
          display: flex;
          justify-content: center;
          padding: 4rem 0;
        }
      `}</style>
    </div>
  );
}

export default App;
