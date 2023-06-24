import {compose , applyMiddleware , createStore, combineReducers} from "redux";
import thunk from "redux-thunk"
import rootReducer from './movies/allReducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store = createStore(

combineReducers({

rootReducer //

}),
composeEnhancers(applyMiddleware(thunk))



    
);
export default store;