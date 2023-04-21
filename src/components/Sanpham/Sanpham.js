import React, { Component } from "react";

class Sanpham extends Component {
  render() {
    return (
      <div className="">
        <img src={this.props.linkanh} alt="#" />
        <h3>{this.props.tieude}</h3>
        <p>Rất ngon</p>
        <p>Giá sản phẩm: 400k</p>
      </div>
    );
  }
}

export default Sanpham;
