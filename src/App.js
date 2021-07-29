import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/homepage/homepage";
import { Header, ProductDetails, Footer } from "./components";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Link to="/recentList">
            <h2>고객이 보고 싶은 상품</h2>
          </Link>
          <Switch>
            <Route exact path="/">
              <Redirect to="/recentList" />
            </Route>
            <Route exact path="/recentList" component={Home}></Route>
            <Route path="/product/:productId" component={ProductDetails}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
