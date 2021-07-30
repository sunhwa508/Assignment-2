import React from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";

class RecentList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <>
        {this.props.abc.map(item => (
          <>
            <Link
              key={shortid.generate()}
              to={`/product`}
              onClick={() => {
                this.props.onClick(item);
              }}
            >
              {item.title}
            </Link>
            <br />
          </>
        ))}
      </>
    );
  }
}

export { RecentList };
