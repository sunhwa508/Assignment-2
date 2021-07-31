import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-size: 1rem;
  align-items: flex-start;

  & button {
    background-color: white;
    border: none;
    width: 40px;
    margin-left: 50px;
    & img {
      width: 40px;
    }
  }
`;
