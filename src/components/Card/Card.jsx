import * as Styled from "./Card.styles";
import React from "react";

export class Card extends React.Component {
  render() {
    return <Styled.CardContent>{this.props.children}</Styled.CardContent>;
  }
}
