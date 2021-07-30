import React from "react";

class ProductDetails extends React.Component {
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
