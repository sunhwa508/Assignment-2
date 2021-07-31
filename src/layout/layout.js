import React from "react";
import styled from "styled-components";
import { Header } from "../components";

const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Layout extends React.Component {
  render() {
    return (
      <>
        <BaseLayout>
          <Header />
          {this.props.children}
        </BaseLayout>
      </>
    );
  }
}

export { Layout };
