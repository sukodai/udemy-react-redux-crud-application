/** 
  ActionCreaterを作る
**/

import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// 非同期処理を実装する
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  //console.log(response)
  // reducerにresponseを渡す
  dispatch({type: READ_EVENTS, response})
}




// reducerで使えるようにexportしておく
// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'

// ActionCreater
// export const increment = () => {
//   return {
//     type: INCREMENT

//   }
// }

// reutunを使わない書き方
// export const decrement = () => ({
//     type: DECREMENT
// })


