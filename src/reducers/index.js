/*
  アプリケーション内に存在する全てのreducerを総括する
  全reducerを、一つのreducerに結合する役割
*/

import {combineReducers} from 'redux'
import count from './count'


export default combineReducers({count})

// 複数の状態を管理できる
//export default combineReducers({foo, bar, baz})
