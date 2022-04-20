import React from "react";
import { GlobalStyle } from "./assets/styles/global";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import PageRoutes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />

        <PageRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
