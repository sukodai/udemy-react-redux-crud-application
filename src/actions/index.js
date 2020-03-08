/** 
  ActionCreaterを作る
**/

// reducerで使えるようにexportしておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// ActionCreater
export const increment = () => {
  return {
    type: INCREMENT

  }
}

// reutunを使わない書き方
export const decrement = () => ({
    type: DECREMENT
})


