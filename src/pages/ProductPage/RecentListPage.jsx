import React from "react";
import { Modal } from "../../components/Modal/Modal";
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
        <FilterBar isInterested={isInterested} selectedBrands={selectedBrands} onChange={onChange} />
        <ProductList abc={this.props.abc} onClick={onClick} onSetCheckedItem={this.props.onSetCheckedItem} />
      </>
    );
  }
}
