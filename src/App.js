import React from "react";
import "./App.css";
import { Header, Footer } from "./components";
import ProductPage from "./pages/homepage/ProductPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductPage />
        <Footer />
      </div>
    );
  }
}

export default App;
