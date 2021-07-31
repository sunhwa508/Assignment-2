import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./header.styles";

class Header extends React.Component {
  render() {
    return (
      <Styled.Wrapper>
        <Link to="/recentList">
          <h2>Mr.Camel</h2>
        </Link>
      </Styled.Wrapper>
    );
  }
}

export { Header };
