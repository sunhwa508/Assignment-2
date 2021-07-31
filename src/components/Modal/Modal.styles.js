import styled from "styled-components";

export const ModalWrapper = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${props => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  z-index: 10;
  padding: 30px;
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 30px;
`;