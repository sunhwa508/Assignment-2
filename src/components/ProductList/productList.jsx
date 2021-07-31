import React from "react";
import * as Styled from "./productList.styles";
import shortid from "shortid";
import { Item } from "../index";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { abc, onClick, onSetCheckedItem } = this.props;

    return (
      <Styled.ItemWrapper>
        {abc.map(item => (
          <div key={shortid.generate()}>
            <Item
              onClick={() => {
                onClick(item);
                onSetCheckedItem(item);
              }}
              item={item}
            />
          </div>
        ))}
      </Styled.ItemWrapper>
    );
  }
}

export { ProductList };
