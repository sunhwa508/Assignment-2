import React from "react";

class ProductDetails extends React.Component {
  render() {
    return <div>{this.props.target.title}</div>;
  }
}

export { ProductDetails };
