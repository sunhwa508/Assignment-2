import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & input {
    display: flex;
    padding: 10px;
    opacity: 0;
    position: absolute;
  }
  & label {
    display: flex;
    border: 0.8px solid black;
    align-items: center;
    margin: 0 10px;
    border-radius: 8px;
  }
`;

export const Span = styled.span`
  font-size: 20px;
  border-right: 1px solid black;
  padding: 5px;
  border-radius: 8px;
  background-color: ${props => (props.OnTagSelected ? "#8977ad" : "white")};
  color: ${props => (props.OnTagSelected ? "white" : "black")};
`;
