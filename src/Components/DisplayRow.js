import React, { Fragment } from 'react';

import InnerTable from './InnerTable';

class DisplayRow extends React.Component {
  state = {
    show: false,
    showDetails: false
  };

  componentDidMount() {
    this.setState({ show: true });
  }

  getClass = () => {
    if (parseFloat(this.props.rowData.CHANGEPCT24HOUR) > 0) return 'profit';
    else if (parseFloat(this.props.rowData.CHANGEPCT24HOUR) < 0) return 'loss';
    else return '';
  };

  getIcon = () => {
    if (parseFloat(this.props.rowData.CHANGEPCT24HOUR) > 0)
      return (
        <span>
          <i class="fas fa-chevron-up" />
        </span>
      );
    else if (parseFloat(this.props.rowData.CHANGEPCT24HOUR) < 0)
      return (
        <span>
          <i class="fas fa-chevron-down" />
        </span>
      );
    else
      return (
        <span>
          <i class="far fa-circle" />
        </span>
      );
  };

  handleToggleDetails = () => {
    const { showDetails } = this.state;
    this.setState({ showDetails: !showDetails });
  };

  deleteRow = MARKET => {
    this.props.onDeleteItem(MARKET);
  };

  render() {
    const { show, showDetails } = this.state;
    const { rowData } = this.props;
    const className = this.getClass();
    const icon = this.getIcon();
    return (
      <Fragment>
        {show && (
          <div className="grid-container">
            <div>BTC</div>
            <div>{rowData.MARKET}</div>
            <div className={className}>{rowData.CHANGEPCT24HOUR + ' %'}</div>
            <div className={className}>{rowData.PRICE}</div>
            <div className={className}>{icon}</div>
            <div className="rowButton">
              <span onClick={() => this.handleToggleDetails(rowData.MARKET)}>
                <i className="fas fa-plus-square" />
              </span>
            </div>
            <div className="rowButton">
              <span onClick={() => this.deleteRow(rowData.MARKET)}>
                <i className="fas fa-minus-square" />
              </span>
            </div>
          </div>
        )}
        {showDetails && <InnerTable />}
      </Fragment>
    );
  }
}

export default DisplayRow;
