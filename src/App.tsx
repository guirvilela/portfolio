import React from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import theme from "./theme";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Home />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
