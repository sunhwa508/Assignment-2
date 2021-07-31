import React from "react";
import { storagePropsManager } from "../../utils/storageManager";
import { STORAGE_KEY_NAMES } from "../../constants";
import * as Styled from "../../components/ProductDetails/ProductDetails.styles";
export class ProductDetailPage extends React.Component {
  componentDidMount() {
    if (this.props.target && this.props.isBlock(this.props.target)) {
      alert("경고 메세지");
      this.props.history.push("/recentList");
    }
  }

  render() {
    const { target } = this.props;

    return (
      <Styled.Wrapper>
        {/* 임시이미지 ( 추후 변경예정 ) */}
        <img src="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg" alt={target.title} />
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
    );
  }
}
