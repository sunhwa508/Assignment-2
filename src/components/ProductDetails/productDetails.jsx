import React from "react";
import { storagePropsManager } from "../../config/storageManager";
import { STORAGE_KEY_NAMES } from "../../constants";

class ProductDetails extends React.Component {
  componentDidMount() {
    if (this.props.target && this.props.isBlock(this.props.target)) {
      alert("경고 메세지");
      this.props.history.push("/recentList");
    }
  }

  render() {
    const selectedItem = storagePropsManager.getItemProps(STORAGE_KEY_NAMES.SELECTED_ITEM);

    return (
      <>
        <button onClick={() => this.props.onGetRandomItem(selectedItem)}>랜덤상품조회</button>
        <button onClick={() => this.props.onSetNotInterestedItem(selectedItem)}>관심없음</button>
        <div>{selectedItem.title}</div>
      </>
    );
  }
}

export { ProductDetails };
