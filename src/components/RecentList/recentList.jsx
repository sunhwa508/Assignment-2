import React from "react";
import shortid from "shortid";
import { Link } from "react-router-dom";
import { storagePropsManager } from "../../config/storageManager";
import { STORAGE_KEY_NAMES } from "../../constants";

class RecentList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedBrands, isInterested, onClick, isBlock } = this.props;

    return (
      <>
        {selectedBrands.map((selectedBrand, idx) => (
          <>
            <label htmlFor={idx}>{selectedBrand.brandName}</label>
            <input
              onChange={e => {
                this.props.onChange(e, idx);
              }}
              key={idx}
              id={idx}
              type="checkbox"
              name="selectedBrands"
              checked={selectedBrand.selected}
            />
          </>
        ))}
        <label htmlFor="isInterested">관심없는 상품 숨기기</label>
        <input
          id="isInterested"
          type="checkbox"
          name="isInterested"
          checked={isInterested}
          onChange={e => {
            this.props.onChange(e);
          }}
        />
        {this.props.abc.map(item => (
          <div key={shortid.generate()}>
            <Link
              to="/product"
              onClick={() => {
                onClick(item);
                this.props.onSetCheckedItem(item);
              }}
            >
              {item.title}
            </Link>
            <br />
          </div>
        ))}
      </>
    );
  }
}

export { RecentList };
