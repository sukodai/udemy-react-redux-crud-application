/*
  reducer
*/
import _ from 'lodash'
import {CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      console.log(action.response.data)
      const data = action.response.data
      return {...events, [data.id]: data}
    
    case READ_EVENTS:
      //console.log(action.response.data)
      //console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')
    
    case DELETE_EVENT:
      //console.log(action.id)
      delete events[action.id] 
      // スプレッド演算子 新しいメモリ空間上に更新後のオブジェクトをreducerが返してくれる
      return {...events}
    default:
      return events
  }
}