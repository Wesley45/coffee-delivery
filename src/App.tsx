import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { CartContextProvider } from "./contexts/CartContext";

import routes from './routes';

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.component} />
              );
            })}
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}
