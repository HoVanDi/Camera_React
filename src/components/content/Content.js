import React, { Component } from 'react';			
// import LeftContent from '../content/Leftcontent';			
// import RightContent from '../content/Rightcontent';		
import { Data } from "./data";
import ShowCard from "./ShowCard/ShowCard";

class Content extends Component {
  // render() {
  //   return (
  //     <div>
  //   <div id="content">			
  //   {/* this is the content for menu */}			
  //   <LeftContent/>			
  //   {/* this is a content for item */}			
  //   <RightContent/>			
  //   </div>			
  //   </div>			
  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {
      home: <div>Trang chu</div>,
    };
  }
  home = () => {
    let data = Data();
    data = data.map(key => {
      return (
        <ShowCard
          image={key.image}
          name={key.name}
          oldprice={key.oldprice}
          newprice={key.newprice}
          des={key.des}
        />
      );
    });
    this.setState({home:data});
  };

  nam = () => {
    let data = Data();
    data = data.filter(e => e.type === "M").map((key) => (
      <ShowCard
        key={key.id}
        image={key.image}
        name={key.name}
        oldprice={key.oldprice}
        newprice={key.newprice}
        des={key.des}
      />
    ));
    this.setState({ home: data });
  };
  nu = () => {
    let data = Data();
    data = data.filter(e => e.type === "F").map((key) => (
      <ShowCard
        key={key.id}
        image={key.image}
        name={key.name}
        oldprice={key.oldprice}
        newprice={key.newprice}
        des={key.des}
      />
    ));
    this.setState({ home: data });
  };
  child = () => {
    let data = Data();
    data = data.filter(e => e.type === "C").map((key) => (
      <ShowCard
        key={key.id}
        image={key.image}
        name={key.name}
        oldprice={key.oldprice}
        newprice={key.newprice}
        des={key.des}
      />
    ));
    this.setState({ home: data });
  };

  render() {
    return (
      <div>
        <div className="button-row">
          <button onClick={this.home}>Home</button>
          <button onClick={this.nam}>Thoi Trang Nam</button>
          <button onClick={this.nu}>Thoi Trang Nu</button>
          <button onClick={this.child}>Thoi Trang Tre em</button>
        </div>
        <div className="items">
          {this.state.home}
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}


export default Content;
