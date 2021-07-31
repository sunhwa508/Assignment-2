import React from "react";
import * as Styled from "./productList.styles";
import shortid from "shortid";
import { Item } from "../index";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { abc, onClick, onSetCheckedItem, isBlock } = this.props;

    return (
      <Styled.ItemWrapper>
        {abc.map(item => (
          <div key={shortid.generate()}>
            <Item
              onClick={() => {
                onClick(item);
                if (isBlock(item)) return;
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
