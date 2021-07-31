import React from "react";
import { ProductList, FilterBar, Modal } from "../../components";
import { Layout } from "../../layout/layout";

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
    const { selectedBrands, isInterested, onClick, radioGroup, handleRadio, onChange } = this.props;

    return (
      <>
        <Modal close={this.onCloseModal} isOpen={this.state.isOpen}>
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
        </Modal>
        <Layout>
          <FilterBar onOpenModal={this.onOpenModal} isInterested={isInterested} selectedBrands={selectedBrands} onChange={onChange} />
          <ProductList abc={this.props.abc} onClick={onClick} onSetCheckedItem={this.props.onSetCheckedItem} isBlock={this.props.isBlock} />
        </Layout>
      </>
    );
  }
}
