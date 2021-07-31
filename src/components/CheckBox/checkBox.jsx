import React from "react";
import * as Styled from "./checkBox.styles";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, checked, onChange, text } = this.props;
    return (
      <Styled.Wrapper>
        <input onChange={onChange} key={id} id={id} type="checkbox" name={name} checked={checked} />
        <label htmlFor={id}>
          <Styled.Span OnTagSelected={checked} OnText={text}>
            {checked && <span>✓</span>} {text}
          </Styled.Span>
        </label>
      </Styled.Wrapper>
    );
  }
}

export { CheckBox };
