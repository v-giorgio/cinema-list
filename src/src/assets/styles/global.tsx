import { createGlobalStyle } from "styled-components";

import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    
}

#root{
    margin:0 auto;
}

body{
    max-width: 100vw;
    font-family: 'Inter', sans-serif;
    background-color: ${colors.dark};
}

/* SCROLLBAR */
::-webkit-scrollbar {
  background-color: ${colors.darkPurple};
  width: 15px;
}

::-webkit-scrollbar-thumb {
    width: 15px;
    background-color: ${colors.lightPurple};
    border-radius: 10px;
}
`;
