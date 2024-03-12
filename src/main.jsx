import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#b8e0d2",
    800: "#96ceb4",
    700: "#88d8b0",
    600: "#77cbb9",
    500: "#68b0ab",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        background: "linear-gradient(to bottom right, #ffdab9, #dda0dd)",
        minHeight: "100vh",
        width: "100vw",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
