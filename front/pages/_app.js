import "../style/global.css";
import React from "react";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
