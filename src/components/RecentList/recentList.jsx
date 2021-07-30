import React from "react";

import { Link } from "react-router-dom";

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
