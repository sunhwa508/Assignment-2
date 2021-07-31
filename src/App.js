import React from "react";
import "./App.css";
import { Header, Footer } from "./components";
import ProductPage from "./pages/ProductPage/ProductPage";
import { Layout } from "./layout/layout";
class App extends React.Component {
  render() {
    return (
      <>
        {/* // <Layout> */}
        <Header />
        <ProductPage />
        {/* <Footer /> */}
        {/* </Layout> */}
      </>
    );
  }
}

export default App;
