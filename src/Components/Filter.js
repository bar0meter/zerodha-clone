import React, { Fragment } from 'react';

class Filter extends React.Component {
  handleChange = e => {
    const filter = e.target.value;
    this.props.onFilterChange(filter);
  };

  render() {
    const { search } = this.props;
    return (
      <Fragment>
        <div className="search">
          <input
            type="text"
            className="searchInput fas"
            value={search}
            onChange={this.handleChange}
            datatoggle="dropwdown"
            placeholder="&#xF002; Search eg: okcoin, Kraken"
          />
        </div>
      </Fragment>
    );
  }
}

export default Filter;
