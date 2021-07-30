import React from "react";
import { itemPropsManager } from "../../config/itemManager";
class ProductDetails extends React.Component {
  onClick = item => {
    this.setState(pre => ({
      ...pre,
      target: item,
    }));
  };

  render() {
    const selectedItem = itemPropsManager.getItemProps();

    return (
      <>
        <button onClick={() => this.props.onGetRandomItem(selectedItem)}>랜덤상품조회</button>
        <div>{selectedItem.title}</div>
      </>
    );
  }
}

export { ProductDetails };
