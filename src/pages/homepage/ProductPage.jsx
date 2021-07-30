import React from "react";
import { RecentList } from "../../components";
import { Route, Link, Switch, Redirect } from "react-router-dom";
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
      notInterested:
        storagePropsManager.getItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM) === null
          ? []
          : storagePropsManager.getItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM),
      selectedBrands: this.makeBrands(data),
      isInterested: false,
    };
  }

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
    const notInterested =
      storagePropsManager.getItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM) === null
        ? []
        : storagePropsManager.getItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM);
    if (this.state.isInterested && notInterested) {
      filterProducts = filterProducts.filter(product => !notInterested.some(notPro => product.title === notPro.title));
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
    return this.state.notInterested.some(product => product.title === item.title);
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
      return { notInterested };
    });

    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM, this.state.notInterested);
    this.onGetRandomItem(item);
  };

  render() {
    const filterProducts = this.onFilter();
    return (
      <>
        <Link to="/recentList">
          <h2>고객이 보고 싶은 상품</h2>
        </Link>
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
                isBlock={this.isBlock}
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
