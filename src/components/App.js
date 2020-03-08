import React, { Component } from 'react';



function App() {
  return (
    <Counter>
    </Counter>
  )
}

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
    console.log(this.state)
  }

  handlePlusButton = () => {
  //handlePlusButton(){
    this.setState({count: this.state.count +1})
  }
  handleMinusButton = () => {
    this.setState({count: this.state.count -1})
  }
  

  render() {
    //console.log(this.state)
    return (
      <div>
        <div>値: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </div>
    )
  }
}



export default App;
