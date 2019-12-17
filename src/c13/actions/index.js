import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT = 'SELECT'
export const INVALIDATE = 'INVALIDATE'

export function selectDataType(dataType) {
    return {
        type: SELECT,
        dataType
    }
}
/**
 * 数据是否过期
 * @param {} dataType 
 */
export function invalidateDataType(dataType) {
    return {
        type: INVALIDATE,
        dataType
    }
}

/**
 * 发出请求
 * @param {*} dataType 
 */
function requestPosts(dataType) {
    return {
        type: REQUEST_POSTS,
        dataType
    }
}
/**
 * 接受响应
 * @param {*} dataType 
 * @param {*} json 
 */
function receivePosts(dataType, json) {
    return {
        type: RECEIVE_POSTS,
        dataType,
        posts: json.result,
        receivedAt: Date.now()
    }
}

// thunk action creator

function fetchPosts(dataType) {
    return dispatch => {
        dispatch(requestPosts(dataType))
        return fetch(`https://api.apiopen.top/${dataType}`)
            .then(resp => { console.log(resp); return resp.json(); })
            .then(json => dispatch(receivePosts(dataType, json)))
    };
}

function shouldFetchPosts(state, dataType) {
    const posts = state.postsByDataType[dataType]
    if(!posts) {
        return true
    } else if(posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(dataType) {
    return (dispatch, getState) => {
        if(shouldFetchPosts(getState(), dataType)) {
            return dispatch(fetchPosts(dataType))
        }
    }
}