import React from "react";
import styled from "styled-components";

const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Layout extends React.Component {
  render() {
    return <BaseLayout>{this.props.children}</BaseLayout>;
  }
}

export { Layout };
