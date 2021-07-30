import React from "react";
import { itemPropsManager } from "../../config/itemManager";
import { STORAGE_KEY_NAMES } from "../../constants";

class ProductDetails extends React.Component {
  onClick = item => {
    this.setState(pre => ({
      ...pre,
      target: item,
    }));
  };

  render() {
    const selectedItem = itemPropsManager.getItemProps(STORAGE_KEY_NAMES.SELECTED_ITEM);

    return (
      <>
        <button onClick={() => this.props.onGetRandomItem(selectedItem)}>랜덤상품조회</button>
        <button>관심없음</button>
        <div>{selectedItem.title}</div>
      </>
    );
  }
}

export { ProductDetails };
