import React from "react";
import shortid from "shortid";
import * as Styled from "./recentList.styles";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { Recent } from "./recentList.styles";
import { Card } from "../Card/Card";
import { CheckBox } from "../CheckBox/checkBox";
import { Item } from "../Item/item";

class RecentList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedBrands, isInterested, onClick } = this.props;
    return (
      <>
        <Styled.Wrapper>
          {selectedBrands.map((selectedBrand, idx) => (
            <CheckBox
              key={idx}
              id={idx}
              name={"selectedBrands"}
              checked={selectedBrand.selected}
              onChange={e => {
                this.props.onChange(e, idx);
              }}
              text={selectedBrand.brandName}
            />
          ))}
          <CheckBox
            id={"isInterested"}
            name={"isInterested"}
            checked={isInterested}
            onChange={e => {
              this.props.onChange(e);
            }}
            text={"관심없는 상품 숨기기"}
          />
        </Styled.Wrapper>

        <Styled.ItemWrapper>
          {this.props.abc.map(item => (
            <div key={shortid.generate()}>
              <Item
                onClick={() => {
                  onClick(item);
                  this.props.onSetCheckedItem(item);
                }}
                item={item}
              />
            </div>
          ))}
        </Styled.ItemWrapper>
        <Modal></Modal>
      </>
    );
  }
}

export { RecentList };
