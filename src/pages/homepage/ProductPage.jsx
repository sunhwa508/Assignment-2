import React from "react";
import { RecentList } from "../../components";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { ProductDetails } from "../../components";
import data from "../../assets/data.json";
import { storagePropsManager } from "../../config/storageManager";
import { STORAGE_KEY_NAMES } from "../../constants";
import { Layout } from "../../layout/layout";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      target: null,
      notInterested:
        storagePropsManager.getItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM) === null
          ? []
          : storagePropsManager.getItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM),
    };
  }

  onClick = item => {
    this.setState(pre => ({
      ...pre,
      target: item,
    }));
    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.SELECTED_ITEM, item);
  };

  generateRandomItem = item => {
    let num = Math.floor(Math.random() * data.length);
    return num === data.findIndex(i => i.title === item.title) && data.filter(item => this.state.notInterested.includes(item))
      ? this.generateRandomItem(item)
      : data[num];
  };

  onGetRandomItem = item => {
    this.setState(pre => ({
      ...pre,
      target: this.generateRandomItem(item),
    }));

    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.SELECTED_ITEM, this.generateRandomItem(item));
  };

  onSetNotInterestedItem = item => {
    this.setState(pre => {
      const timeStamp = new Date().setHours(24, 0, 0, 0);
      const notInterested = pre.notInterested.concat({ ...item, timeStamp });
      storagePropsManager.setItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM, notInterested);
      return { notInterested };
    });

    this.onGetRandomItem(item);
  };

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Redirect to="/recentList" />
          </Route>
          <Route exact path="/recentList" render={() => <RecentList abc={this.state.products} onClick={this.onClick} />}></Route>
          <Route
            path="/product"
            render={() => (
              <ProductDetails
                target={this.state.target}
                notInterested={this.state.notInterested}
                onSetNotInterestedItem={this.onSetNotInterestedItem}
                onGetRandomItem={this.onGetRandomItem}
              />
            )}
          ></Route>
        </Switch>
      </>
    );
  }
}

export default ProductPage;
