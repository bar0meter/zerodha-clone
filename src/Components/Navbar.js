import React, { Fragment } from 'react';
import { blockParams } from 'handlebars';

const Navbar = props => {
  return (
    <div className="navBar">
      <a className="navBarLinks">Dashboard</a>
      <a className="navBarLinks">Order</a>
      <a className="navBarLinks">Holdings</a>
      <a className="navBarLinks">Position</a>
    </div>
  );
};

export default Navbar;
