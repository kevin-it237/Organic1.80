import { combineReducers, createStore } from 'redux';
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";


const laugherApp = combineReducers({
   
});
  
export default createStore(laugherApp , applyMiddleware(thunk));