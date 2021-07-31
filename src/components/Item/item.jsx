import React from "react";
import * as Styled from "./item.styles";
import { Link } from "react-router-dom";
import { BRAND_LOGO } from "../../constants";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, onClick } = this.props;
    return (
      <Styled.Wrapper>
        <Link to="/product" onClick={onClick}>
          <img src="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg" alt={item.title} />
          <div>
            <p>{item.title}</p>
            <Styled.Logo src={BRAND_LOGO[item.brand]} />
          </div>
          <p>{item.price}</p>
        </Link>
      </Styled.Wrapper>
    );
  }
}

export { Item };
