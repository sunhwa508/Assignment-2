import React from "react";
import shortid from "shortid";
import { Modal } from "../../components/Modal/Modal";
import { CheckBox } from "../../components/CheckBox/checkBox";
import { Item } from "../../components/Item/item";
import * as Styled from "../../components/RecentList/recentList.styles";

export class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidUpdate() {}

  onOpenModal = () => {
    this.setState(pre => ({
      ...pre,
      isOpen: true,
    }));
  };

  onCloseModal = () => {
    this.setState(pre => ({
      ...pre,
      isOpen: false,
    }));
  };

  render() {
    const { selectedBrands, isInterested, onClick, radioGroup, handleRadio } = this.props;
    return (
      <>
        <Modal close={this.onCloseModal} isOpen={this.state.isOpen}>
          <div>
            <div>
              <input
                id="notSelected"
                type="radio"
                onChange={handleRadio}
                checked={radioGroup["notSelected"]}
                name="radioGroup"
                value="notSelected"
              ></input>
              <label htmlFor="notSelected">선택 안함</label>
            </div>
            <div>
              <input
                id="lastViewed"
                type="radio"
                onChange={handleRadio}
                checked={radioGroup["lastViewed"]}
                name="radioGroup"
                value="lastViewed"
              ></input>
              <label htmlFor="lastViewed">최근 조회순</label>
            </div>
            <div>
              <input id="lowPriced" type="radio" onChange={handleRadio} checked={radioGroup["lowPriced"]} name="radioGroup" value="lowPriced"></input>
              <label htmlFor="lowPriced">낮은 가격순</label>
            </div>
          </div>
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
          <button onClick={this.onOpenModal}>정렬</button>
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
