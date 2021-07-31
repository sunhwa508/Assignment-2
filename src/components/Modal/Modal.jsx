import React from "react";
import * as Styled from "./Modal.styles";

class Modal extends React.Component {
  render() {
    return (
      <Styled.ModalWrapper>
        <Styled.ModalContainer>{this.props.children}</Styled.ModalContainer>
      </Styled.ModalWrapper>
    );
  }
}

export { Modal };
