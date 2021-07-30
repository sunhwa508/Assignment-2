import React from "react";
import { RecentList } from "../../components";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProductDetails } from "../../components";
import data from "../../assets/data.json";
import { storagePropsManager } from "../../config/storageManager";
import { STORAGE_KEY_NAMES } from "../../constants";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      target: null,
      selectedBrands: this.makeBrands(data),
      isInterested: false,
    };
  }

  onGetIsNotInterested = () => {
    return storagePropsManager.getItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM) || [];
  };

  onChange = (e, index = null) => {
    const name = e.target.name;
    switch (name) {
      case "selectedBrands":
        this.setState(pre => ({
          ...pre,
          [name]: pre.selectedBrands.map((c, i) => (index === i ? { ...c, selected: !c.selected } : c)),
        }));
        break;
      case "isInterested":
        this.setState(pre => ({
          ...pre,
          [name]: !pre[name],
        }));
        break;
    }
  };

  onFilter = () => {
    let filterProducts = this.state.products;
    const isChecked = this.state.selectedBrands.some(p => p.selected === true);

    if (this.state.isInterested && this.onGetIsNotInterested()) {
      filterProducts = filterProducts.filter(product => !this.onGetIsNotInterested().some(notPro => product.title === notPro.title));
    }
    if (isChecked) {
      filterProducts = filterProducts.filter(product => {
        return this.state.selectedBrands.some(c => c.brandName === product.brand && c.selected);
      });
    }

    return filterProducts;
  };

  makeBrands = products => {
    const brandNames = new Set(products.map(product => product.brand));
    const selectedBrands = [...brandNames].map(name => ({
      brandName: name,
      selected: false,
    }));
    return selectedBrands;
  };

  isBlock = item => {
    return this.onGetIsNotInterested().some(product => product.title === item.title);
  };

  onClick = item => {
    this.setState(pre => ({
      ...pre,
      target: item,
    }));
    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.SELECTED_ITEM, item);
  };

  generateRandomItem = item => {
    let num = Math.floor(Math.random() * data.length);
    return num === data.findIndex(i => i.title === item.title) && data.filter(item => this.onGetIsNotInterested().includes(item))
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
    const timeStamp = new Date().setHours(24, 0, 0, 0);
    const withTimeStamp = this.onGetIsNotInterested().concat({ ...item, timeStamp });
    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM, withTimeStamp);

    this.onGetRandomItem(item);
  };

  render() {
    const filterProducts = this.onFilter();
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Redirect to="/recentList" />
          </Route>
          <Route
            path="/recentList"
            render={routeProps => (
              <RecentList
                isBlock={this.isBlock}
                onChange={this.onChange}
                isInterested={this.state.isInterested}
                selectedBrands={this.state.selectedBrands}
                abc={filterProducts}
                onClick={this.onClick}
                {...routeProps}
              />
            )}
          ></Route>
          <Route
            path="/product"
            render={routeProps => (
              <ProductDetails
                target={this.state.target}
                notInterested={this.state.notInterested}
                onSetNotInterestedItem={this.onSetNotInterestedItem}
                onGetRandomItem={this.onGetRandomItem}
                {...routeProps}
              />
            )}
          ></Route>
        </Switch>
      </>
    );
  }
}

export default ProductPage;
