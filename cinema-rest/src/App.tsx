import React from "react";
import { GlobalStyle } from "./assets/styles/global";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRoutes from "./routes";

function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />

          <PageRoutes />
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
