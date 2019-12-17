import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const store = createStore(
    reducer,
    applyMiddleware(createSagaMiddleware(saga))
)