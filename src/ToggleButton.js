import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  handleClick = (e, value) => {
    console.log(value);
    this.setState((state) => {
      return { isToggleOn: state.isToggleOn ? false : true };
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.handleClick(e, 'Yadhu');
          }}
        >
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
