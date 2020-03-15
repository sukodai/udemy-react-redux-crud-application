/** 
  ActionCreaterを作る
**/

import axios from 'axios'

// reducerで使えるようにexportしておく
export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// 非同期処理を実装する
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  //console.log(response)
  // reducerにresponseを渡す
  dispatch({type: READ_EVENTS, response})
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  dispatch({type: CREATE_EVENT, response})
}

export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
  dispatch({type: UPDATE_EVENT, response})
}

export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${QUERYSTRING}`)
  console.log(response)
  dispatch({type: READ_EVENT, response})
}

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  
  // reducerに削除したidを渡す
  dispatch({type: DELETE_EVENT, id})
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


