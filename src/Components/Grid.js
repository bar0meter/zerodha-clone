import React from 'react';
import './Grid.css';

import Filter from './Filter';

class Grid extends React.Component {
  state = {
    data: [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
    ],
    filter: ''
  };

  handleChange = e => {
    let filter = e.target.value;
    this.setState({ filter });
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;
    const rowFilter = this.state.data.filter(
      x =>
        x.name.toLowerCase().includes(filter.toLowerCase()) ||
        x.symbol.toLowerCase().includes(filter.toLowerCase())
    );

    const rowData = rowFilter.map(x => {
      return (
        <tr key={x.position}>
          <td>{x.position}</td>
          <td>{x.name}</td>
          <td>{x.weight}</td>
          <td>{x.symbol}</td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <div className="wrapper">
          <Filter onFilterChange={this.handleFilterChange} search={filter} />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Weight</th>
                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>{rowData}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Grid;
