import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsProvider } from "./context/Products.tsx";
import { UserProvider } from "./context/User.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ProductsProvider>
  </React.StrictMode>
);
