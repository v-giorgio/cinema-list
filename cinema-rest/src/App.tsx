import React, { useState, useEffect } from "react";

import { GlobalStyle } from "./assets/styles/global";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRoutes from "./routes";
import Animation from "./components/Animation/index";

function App() {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 4000);
  }, []);

  return (
    <>
      <ChakraProvider>
        {animation ? (
          <Animation />
        ) : (
          <>
            <GlobalStyle />
            <BrowserRouter>
              <Header />
              <PageRoutes />
              <Footer />
            </BrowserRouter>
          </>
        )}
      </ChakraProvider>
    </>
  );
}

export default App;
