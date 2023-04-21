import React, { Component } from 'react'
import { getData } from './data';


// export default class Statedemo extends Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       Name: "Ho Van Di",
//       age : 190
//     }
//   }
//   render() {
//     let status = this.state.age > 50 ? "Già" : "Trẻ"
//       return (
//         <div>
//           <h2>{this.state.Name}</h2>
//           <p>Tuổi: {this.state.age}</p>
//           <h2> 
//             {status}
//           </h2>
//         </div>)
//     }
// }

export default class Data extends Component {
  constructor(props){
    var arr = getData();
    super(props);
    this.state ={arr};
    }
    render() {
        return (
        <div>
            {
        this.state.arr.map(key =>
          <div>
            <h2> {key.name}</h2>
            {/* <img src = {key.image}> </img> */}
            <h3> {key.loai}</h3>
          </div>
            )
            }
          </div>
          );

      }
  }





