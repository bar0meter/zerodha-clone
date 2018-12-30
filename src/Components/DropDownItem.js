import React from 'react';

class DropDownItem extends React.Component {
  state = {
    styleBlock: {
      border: '1px solid #F2F2F2',
      backgroundColor: 'white',
      height: '50px',
      textAlign: 'left',
      padding: '0px 15px',
      textTransform: 'uppercase',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center'
    },
    buttonClass: {
      textAlign: 'right'
    }
  };

  handleClick = () => {
    this.props.onItemClick(this.props.market);
  };

  render() {
    const { market } = this.props;
    return (
      <div
        className="dropDownItem"
        style={this.state.styleBlock}
        onClick={this.handleClick}
      >
        <span>{market}</span>
      </div>
    );
  }
}

export default DropDownItem;
