import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/index'
import AsyncApp from './AsyncApp'

const store = configureStore()

export default () => (
    <Provider store={store}>
        <AsyncApp />
    </Provider>
)