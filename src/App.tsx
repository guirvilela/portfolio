import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { configureTranslate } from "./config/i18n";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import theme from "./theme";

const i18nInstance = configureTranslate();

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Analytics />
        <I18nextProvider i18n={i18nInstance}>
          <GlobalStyle />
          <Home />
        </I18nextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
