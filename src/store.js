import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';


export default createStore(combineReducers({
    ...reducers,
  }),
  applyMiddleware(thunk)
  /**
   * Redux thunk nos permite despachar acciones que nos permiten ejecutar acciones asincronas
   */
)