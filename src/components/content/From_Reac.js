import React, { Component } from 'react'

 class From_Reac extends Component {
  constructor(props){
          super(props);
            this.state={  
              isGoing: true ,
              guestName: 'Hồ Văn Đi',
              course: 'Reactjs',
              message: 'you message here',
            };
          };

          handleInputChange = (event)=>{
            const target = event.target;
            const value =target.type === 'checkbox'? target.checked : target.value;
            const name =  target.name;
            this.setState({
              [name]:value
            }); 
          }

          handleSubmit = (event)=>{
            alert('tham gia: '
            + this.state.isGoing + ', họ tên: '
            + this.state.guestName + ', '
            + this.state.course + 'và '
            + this.state.message
            );
event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tham gia:
          <input 
          name='isGoing'
          type='checkbox'
          checked={this.state.isGoing}
          onChange={this.handleInputChange}/>
        </label>
<br/>

<label>
          Ghi rõ họ tên:
          <input 
          name='guestName'
          type='text'
          value={this.state.guestName}
          onChange={this.handleInputChange}/>
        </label>
<br/>

    <label>
          Chọn khóa học:
          <select
          name='course'
          checked={this.state.course}
          onChange={this.handleInputChange}/>

          <option value="html">html</option>
          <option value="css">css</option>
          <option value="javaScript">javaScript</option>
          <option value="React.js">React.js</option>
        </label>
    <br/>

<label>
          message:
          <textarea
          name='message'
          type='text'
          value={this.state.message}
          onChange={this.handleInputChange}/>
        </label>
<br/>

<input type='submit' value='submit'/>
      </form>
    );
  };
};


export default From_Reac;
