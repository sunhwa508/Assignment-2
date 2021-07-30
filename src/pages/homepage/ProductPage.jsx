import React from "react";
import { RecentList } from "../../components";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { ProductDetails } from "../../components";
import data from "../../assets/data.json";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      target: null,
    };
  }

  onClick = item => {
    this.setState(pre => ({
      ...pre,
      target: item,
    }));
  };

  render() {
    return (
      <>
        <Link to="/recentList">
          <h2>고객이 보고 싶은 상품</h2>
        </Link>
        <Switch>
          <Route exact path="/">
            <Redirect to="/recentList" />
          </Route>
          <Route exact path="/recentList" render={() => <RecentList abc={this.state.products} onClick={this.onClick} />}></Route>
          <Route path="/product" render={() => <ProductDetails target={this.state.target} />}></Route>
        </Switch>
      </>
    );
  }
}

export default ProductPage;
