import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import {Link} from 'react-router-dom'

import {readEvents} from '../actions'

class EventsIndex extends Component {
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
  
  // コンポーネントがマウントされた時に実行されるメソッド
  componentDidMount() {
    console.log("hi!")

    // 外部のAPIサーバを一覧で取得する
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
          </td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    //console.log(this.state)
    //const props = this.props
    //console.log(props.events)
        return (
          <React.Fragment>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {this.renderEvents()}
              </tbody>
            </table>
            <Link to="/events/new">New Event</Link>
          </React.Fragment>
      )
  }
}


const mapDispatchToProps = ({readEvents})
const mapStateToProps = state => ({events: state.events})
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


// mapStateToProps
// stateの情報から、このコンポーネントで必要なものを取り出して、
// コンポーネント内のpropsとしてmappingする
// const mapStateToProps = state => ({value: state.count.value})

// mapDispatchToProps
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

// 以下のように書き換えることもできる
//const mapDispatchToProps = ({increment, decrement})

// ここから、stateとActionをcomponentに関連づける関数
// stateとActionをコンポーネントに関連づける。引数にcomponentを渡す

//export default App;
