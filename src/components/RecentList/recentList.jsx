import React from "react";
import shortid from "shortid";

class RecentList extends React.Component {
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
            <div
              onClick={() => {
                if (isBlock(item)) {
                  alert("경고 메세지!!");
                  return;
                }
                onClick(item);
                this.props.history.push("/product");
              }}
            >
              {item.title}
            </div>
            <br />
          </div>
        ))}
      </>
    );
  }
}

export { RecentList };
