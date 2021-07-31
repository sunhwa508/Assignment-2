import styled from "styled-components";
import React from "react";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  display: flex;
  max-width: 70%;
  flex-wrap: wrap;
`;

export const RecentListWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const RecentListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export class Recent extends React.Component {
  render() {
    return (
      <>
        <RecentListWrapper>
          <RecentListContent>{this.props.children}</RecentListContent>
        </RecentListWrapper>
      </>
    );
  }
}
