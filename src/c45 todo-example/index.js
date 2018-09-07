import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(rootReducer);

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);