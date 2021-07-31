import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 60vw;
  justify-content: space-around;

  & button {
    background-color: white;
    border: none;
    width: 40px;
    margin-left: 100px;
    & img {
      width: 40px;
    }
  }
`;
