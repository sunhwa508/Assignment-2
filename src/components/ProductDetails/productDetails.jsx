import React from "react";
import { storagePropsManager } from "../../config/storageManager";
import { STORAGE_KEY_NAMES } from "../../constants";

class ProductDetails extends React.Component {
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
