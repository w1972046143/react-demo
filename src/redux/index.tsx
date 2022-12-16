
//创建redux中作为核心的store               支持异步的中间件
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
 
//引入支持异步acton
import thunk from 'redux-thunk'
//引入开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
//这里为reduces文件这里还没说往下看
import Reducer from './reducer'                     
export default createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)))
