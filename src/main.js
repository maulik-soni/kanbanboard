import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import projectManager from './store/projectManagerStore';

const middlewares = [thunk];

const store = createStore(
	combineReducers({
    projectManager
  }),
	compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store;