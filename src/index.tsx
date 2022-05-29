import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Content as ContentPage } from "./components/Content/Content";
import PokemonView from "./components/PokemonView/PokemonView";
import { ThemeProvider } from "./Theme/ThemeContext";
import Background from "./Theme/Background";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Background>
          <Navbar />
          <Routes>
            <Route path="/page/:pageNumber" element={<ContentPage />} />
            <Route path="/pokemon/:name" element={<PokemonView />} />
            <Route path="*" element={<Navigate to="/page/0" replace />} />
          </Routes>
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
