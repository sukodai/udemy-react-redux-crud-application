import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions'

// function App() {
//   return (
//     <Counter>
//     </Counter>
//   )
// }

class App extends Component {
  // constructorでの値の初期化は、reducer側で行うので不要。
  // constructor(props){
  //   super(props)
  //   this.state = {count: 0}
  //   console.log(this.state)
  // }

  // actioncreater（action/index.js）から/reducers/を呼ぶので不要になる。
  // handlePlusButton = () => {
  // //handlePlusButton(){
  //   this.setState({count: this.state.count +1})
  // }
  // handleMinusButton = () => {
  //   this.setState({count: this.state.count -1})
  // }
  
  render() {
    //console.log(this.state)
    const props = this.props
    return (
      <div>
        {/* <div>値: {this.state.count}</div> */}
        {/* <button onClick={this.handlePlusButton}>+1</button> */}
        {/* <button onClick={this.handleMinusButton}>-1</button> */}
        {/* reducer/count.jsのvalueを呼んでいる */}
        <div>値: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </div>
    )
  }
}


// mapStateToProps
// stateの情報から、このコンポーネントで必要なものを取り出して、
// コンポーネント内のpropsとしてmappingする
const mapStateToProps = state => ({value: state.count.value})

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

// 以下のように書き換えることもできる
//const mapDispatchToProps = ({increment, decrement})



// ここから、stateとActionをcomponentに関連づける関数
// stateとActionをコンポーネントに関連づける。引数にcomponentを渡す
export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default App;
