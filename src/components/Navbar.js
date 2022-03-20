import React, { Component } from 'react';

class Navbar extends Component {


  getAddr() {
      navigator.clipboard.writeText(this.props.account)
  }

  render() {
    return (
      <div className="agnnav">
        <div className="agnmml agnnavbtnl"><span className="agnbold">ETHER-GAME</span></div>
        <div className="agnnavbtnl agntxthvr" onClick={e => this.getAddr()}>{this.props.account.substring(0, 8)+'...'}</div>
      </div>
    );
  }
}

export default Navbar;