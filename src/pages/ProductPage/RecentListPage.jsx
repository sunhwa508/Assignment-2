import React from "react";
import { Modal } from "../../components/Modal/Modal";
import { CheckBox } from "../../components/CheckBox/checkBox";
import * as Styled from "../../components/RecentList/recentList.styles";
import { ProductList, FilterBar } from "../../components";

export class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedBrands, isInterested, onClick, onChange } = this.props;
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
        {/* <Styled.Wrapper>
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
        </Styled.Wrapper> */}
        <FilterBar isInterested={isInterested} selectedBrands={selectedBrands} onChange={onChange} />
        <ProductList abc={this.props.abc} onClick={onClick} onSetCheckedItem={this.props.onSetCheckedItem} />
      </>
    );
  }
}
