import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 250px;
  margin: 20px 10px;
  text-align: center;

  & div {
    display: flex;
    flex-direction: column;
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
