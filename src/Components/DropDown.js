import React from 'react';
import DropDownItem from './DropDownItem';

class DropDown extends React.Component {
  state = {
    results: [],
    show: false,
    style: {
      position: 'absolute',
      width: '100%',
      display: 'block',
      backgroundColor: 'white'
    }
  };

  handleItemClick = item => {
    this.props.onAddItem(item);
  };

  render() {
    const { results } = this.props;
    const displayResult = results.map((x, index) => {
      return (
        <DropDownItem
          key={index}
          market={x}
          onItemClick={this.handleItemClick}
        />
      );
    });
    return (
      <div style={{ position: 'relative' }}>
        <div style={this.state.style}>{displayResult}</div>
      </div>
    );
  }
}

export default DropDown;
