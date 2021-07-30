import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { htmlFor, key, id, name, checked, onChange, text } = this.props;
    return (
      <>
        <label htmlFor={htmlFor}>{text}</label>
        <input onChange={onChange} key={key} id={id} type="checkbox" name={name} checked={checked} />
      </>
    );
  }
}

export { CheckBox };
