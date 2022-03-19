import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div className="agnnav">
        <div className="agnmml agnnavbtnl"><span className="agnbold">ETHER-GAME</span></div>
        <div className="agnnavbtnl agntxthvr">{this.props.account}</div>
      </div>
    );
  }
}

export default Navbar;