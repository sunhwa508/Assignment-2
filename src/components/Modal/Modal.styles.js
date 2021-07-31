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
  z-index: 101;
  padding: 30px;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.1rem;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  & input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 1px solid #999;
    transition: 0.2s all linear;
    outline: none;
    margin-right: 5px;
    position: relative;

    & label {
      transition: 0.2s all linear;
    }
    &:checked {
      border: 6px solid #8977ad;
      &label {
        font-size: 25px;
        color: #000;
      }
    }
  }
`;
