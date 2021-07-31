import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    min-height: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    & h2 {
      width: 70%;
      margin-bottom: 10px;
      height: 90px;
    }
  }
  & img {
    width: 500px;
  }
  & button {
    cursor: pointer;
    background-color: #8977ad;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 15px 32px;
    font-size: 16px;
    margin: 10px 0;
    &:hover {
      background-color: #8967ad;
    }
  }
`;
