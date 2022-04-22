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
  background-color: ${colors.darkestPurple};
  width: 10px;
}

::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: ${colors.darkPurple};
    border-radius: 10px;
}
`;
