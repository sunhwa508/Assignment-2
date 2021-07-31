import React from "react";
import * as Styled from "./ProductDetails.styles";
import { Layout } from "../../layout/layout";

export class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.target)
    if (Array.isArray(this.props.target)) {
      this.props.history.push("/recentList");
    }
  }

  componentDidMount() {
    if (this.props.target && this.props.isBlock(this.props.target)) {
      alert("경고 메세지");
      this.props.history.push("/recentList");
    }
  }

  render() {
    const { target } = this.props;

    return (
      <Layout>
        <Styled.Wrapper>
          <img src="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg" alt={target.title || ""} />
          <div>
            <h2>{target.title}</h2>
            <h4>{target.brand}</h4>
            <h4>{target.price}</h4>
          </div>
          <button onClick={() => this.props.onGetRandomItem(target)}>
            <span>랜덤상품조회</span>
          </button>
          <button onClick={() => this.props.onSetNotInterestedItem(target)}>
            <span>관심없음</span>
          </button>
        </Styled.Wrapper>
      </Layout>
    );
  }
}
