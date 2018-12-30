import React, { Fragment } from 'react';
import DisplayRow from './DisplayRow';

import RLDD from 'react-list-drag-and-drop/lib/RLDD';

class DisplayTable extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeleteItem = MARKET => {
    console.log(MARKET);
    this.props.onDeleteMarket(MARKET);
  };

  handleRLDDChange(newItems) {
    this.props.onDDChange(newItems);
  }

  itemRenderer(item, index) {
    return (
      <DisplayRow
        className="item"
        rowData={item}
        onDeleteItem={this.handleDeleteItem}
        key={index}
      />
    );
  }

  render() {
    const { data } = this.props;
    // const rows = data.map((x, index) => {
    //   return (
    //     <DisplayRow
    //       key={index}
    //       rowData={x}
    //       onDeleteItem={this.handleDeleteItem}
    //     />
    //   );
    // });

    return (
      <Fragment>
        {/* <div>{rows}</div> */}
        <RLDD
          items={data}
          itemRenderer={this.itemRenderer}
          onChange={this.handleRLDDChange}
        />
      </Fragment>
    );
  }
}

export default DisplayTable;
