import React from "react";
import shortid from "shortid";
import { Modal } from "../../components/Modal/Modal";
import { CheckBox } from "../../components/CheckBox/checkBox";
import { Item } from "../../components/Item/item";
import * as Styled from "../../components/RecentList/recentList.styles";

export class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedBrands, isInterested, onClick } = this.props;
    return (
      <>
        <Modal>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
        </Modal>
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
          <button>정렬</button>
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
      </>
    );
  }
}
