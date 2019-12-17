import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import userLoginReducer from './reducer';

export default const store = createStore(userLoginReducer, applyMiddleware(reduxThunk));