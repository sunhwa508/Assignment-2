import React from "react";
import * as Styled from "./Modal.styles";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("click", this.handleModal);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleModal);
  }

  handleModal = e => {
    e.stopPropagation();

    if (e.target === this.container.current) {
      this.props.close();
    }
  };

  render() {
    return (
      <Styled.ModalWrapper onClick={this.handleModal} ref={this.container} isOpen={this.props.isOpen}>
        <Styled.ModalContainer>{this.props.children}</Styled.ModalContainer>
      </Styled.ModalWrapper>
    );
  }
}

export { Modal };
