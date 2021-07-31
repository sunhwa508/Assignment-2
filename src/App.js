import React from "react";
import "./App.css";
import { Header, Footer } from "./components";
import ProductPage from "./pages/ProductPage/ProductPage";

class App extends React.Component {
  render() {
    return (
      <>
        <ProductPage />
      </>
    );
  }
}

export default App;
