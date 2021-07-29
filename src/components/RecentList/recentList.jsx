import React from "react";
import data from "../../assets/data";
import { Link } from "react-router-dom";

class RecentList extends React.Component {
  render() {
    return (
      <>
        {data.map(item => (
          <>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
            <br />
          </>
        ))}
      </>
    );
  }
}

export { RecentList };
