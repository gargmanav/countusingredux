import {legacy_createStore,applyMiddleware} from 'redux'
import basicreducer from './Reducer'
import logger from 'redux-logger'

const mystore = legacy_createStore(basicreducer);

export default mystore