import { combineReducers } from 'redux'
import {
    SELECT,
    INVALIDATE,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/index'

// state 数据结构

// state = {
//     selectDataType: '', // users or opencity/list
//     postByDataType: {
//         users: {
//             isFetching: false,
//             didInvalidate: false,
//             lastUpdated: 1439478405547,
//             items: []
//         },
//         citys: {
//             isFetching: false,
//             didInvalidate: false,
//             lastUpdated: 1439478405547,
//             items: []
//         }
//     }
// }

function selectDataType(state = 'videoHomeTab', action) {
    switch(action.type) {
        case SELECT:
            return action.dataType
        default:
            return state
    }
}

function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch(action.type) {
        case INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
    }
}

function postsByDataType(state = {}, action) {
    switch(action.type) {
        case INVALIDATE:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.dataType]: posts(state[action.dataType], action)
            })
        default:
            return state
    }
}

export default combineReducers({
    selectDataType,
    postsByDataType
})