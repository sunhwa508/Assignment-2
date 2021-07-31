import React from "react";
import * as Styled from "./filterBar.styles";
import { CheckBox } from "../CheckBox/checkBox";
import shortid from "shortid";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedBrands, isInterested, onChange, onOpenModal } = this.props;

    return (
      <Styled.Wrapper>
        {selectedBrands.map((selectedBrand, idx) => (
          <CheckBox
            key={shortid.generate()}
            id={idx}
            name={"selectedBrands"}
            checked={selectedBrand.selected}
            onChange={e => {
              onChange(e, idx);
            }}
            text={selectedBrand.brandName}
          />
        ))}
        <CheckBox
          id={"isInterested"}
          name={"isInterested"}
          checked={isInterested}
          onChange={e => {
            onChange(e);
          }}
          text={"관심없는 상품 숨기기"}
        />
        <button onClick={onOpenModal}>정렬</button>
      </Styled.Wrapper>
    );
  }
}

export { FilterBar };
