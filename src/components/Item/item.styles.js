import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 250px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  & div {
    height: 70px;
  }
  & img {
    width: 250px;
  }
  & p {
    margin: 10px 0;
    color: black;
    &:first-child {
      height: 40px;
    }
    &:last-child {
      font-weight: bold;
      color: #8977ad;
    }
  }
`;
export const Logo = styled.img`
  height: 20px;
  object-fit: contain;
`;
