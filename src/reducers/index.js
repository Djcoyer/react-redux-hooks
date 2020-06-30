import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import characterReducer from './characterReducer';


//Create our central Redux store, which serves as the source of truth for data in our app
//Its data is the sum of all the reducers we create in the app, combined here in this function
//We can optionally apply middleware to redux to add other behaviors. I've added thunk and a special logger.
const store = createStore(combineReducers({
    characters: characterReducer
}), applyMiddleware(thunk, logger));

export default store;