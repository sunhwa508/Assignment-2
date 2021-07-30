import React from "react";
import { RecentList } from "../../components";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { ProductDetails } from "../../components";
import data from "../../assets/data.json";
import { itemPropsManager } from "../../config/itemManager";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      target: null,
    };
  }

  onClick = item => {
    itemPropsManager.setItemProps(item);
    this.setState(pre => ({
      ...pre,
      target: item,
    }));
  };

  generateRandomItem = item => {
    let num = Math.floor(Math.random() * data.length);
    return num === data.findIndex(i => i.title === item.title) ? this.generateRandom(item) : data[num];
  };

  onGetRandomItem = item => {
    this.setState(pre => ({
      ...pre,
      target: this.generateRandomItem(item),
    }));

    itemPropsManager.setItemProps(this.generateRandomItem(item));
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
          <Route path="/product" render={() => <ProductDetails target={this.state.target} onGetRandomItem={this.onGetRandomItem} />}></Route>
        </Switch>
      </>
    );
  }
}

export default ProductPage;
