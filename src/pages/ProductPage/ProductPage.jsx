import React from "react";
import { RecentList } from "../../components";
import { Route, Switch, Redirect } from "react-router-dom";
import data from "../../assets/data.json";
import { storagePropsManager } from "../../utils/storageManager";
import { STORAGE_KEY_NAMES } from "../../constants";
import { RecentListPage } from "./RecentListPage";
import { ProductDetailPage } from "./ProductDetailPage";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      target: null,
      selectedBrands: this.makeBrands(data),
      isInterested: false,
      timeStamp: new Date().setHours(24, 0, 0, 0),
      radioGroup: {
        notSelected: false,
        lastViewed: false,
        lowPriced: false,
      },
    };
  }

  onGetStorageItem = key => {
    return storagePropsManager.getItemProps(key) || [];
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

    if (this.state.isInterested && this.onGetStorageItem(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM)) {
      filterProducts = filterProducts.filter(
        product => !this.onGetStorageItem(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM).some(notPro => product.title === notPro.title),
      );
    }
    if (isChecked) {
      filterProducts = filterProducts.filter(product => {
        return this.state.selectedBrands.some(c => c.brandName === product.brand && c.selected);
      });
    }

    return filterProducts;
  };

  handleRadio = e => {
    let radioGroup = {};

    this.setState(pre => {
      const preradioGroup = {
        ...pre.radioGroup,
      };
      radioGroup = Object.fromEntries(Object.entries(preradioGroup).map(([key, val]) => [key, false]));
      radioGroup[e.target.value] = e.target.checked;
      return {
        ...pre,
        radioGroup,
      };
    });
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
    return this.onGetStorageItem(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM).some(product => product.title === item.title);
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
    return num === data.findIndex(i => i.title === item.title) &&
      data.filter(item => this.onGetStorageItem(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM).includes(item))
      ? this.generateRandomItem(item)
      : data[num];
  };

  onGetRandomItem = item => {
    const randomItem = this.generateRandomItem(item);
    this.setState(pre => ({
      ...pre,
      target: randomItem,
    }));

    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.SELECTED_ITEM, randomItem);
    this.onSetCheckedItem(randomItem);
  };

  onSetNotInterestedItem = item => {
    let timeStamp = this.state.timeStamp;
    const withTimeStamp = this.onGetStorageItem(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM).concat({ ...item, timeStamp });
    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM, withTimeStamp);

    this.onGetRandomItem(item);
  };

  onCheckTime = storageKey => {
    // 오늘 자정 시간 체크
    let timeStamp = this.state.timeStamp;
    const hasToFilter = this.onGetStorageItem(storageKey);
    // 현재기준 자정 시간과 아이템 저장한시 자정시간과 다르면 하루가 지난것이므로 필터링으로 걸려줌
    const filterOldData = hasToFilter.filter(item => timeStamp === item.timeStamp);
    storagePropsManager.setItemProps(storageKey, filterOldData);
  };

  onSetCheckedItem = item => {
    // 시간체크 후 초기화 작업
    this.onCheckTime(STORAGE_KEY_NAMES.RECENT_CHECKED);
    this.onCheckTime(STORAGE_KEY_NAMES.NOT_INTERESTED_ITEM);

    let timeStamp = this.state.timeStamp;
    const checkItem = this.onGetStorageItem(STORAGE_KEY_NAMES.RECENT_CHECKED).filter(data => data.title !== item.title);
    const recentClicked = checkItem.concat([{ ...item, timeStamp }]);
    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.RECENT_CHECKED, recentClicked);
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
              <RecentListPage
                isBlock={this.isBlock}
                onChange={this.onChange}
                isInterested={this.state.isInterested}
                selectedBrands={this.state.selectedBrands}
                abc={filterProducts}
                onClick={this.onClick}
                onSetCheckedItem={this.onSetCheckedItem}
                radioGroup={this.state.radioGroup}
                handleRadio={this.handleRadio}
                {...routeProps}
              />
            )}
          ></Route>
          <Route
            path="/product"
            render={routeProps => (
              <ProductDetailPage
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
