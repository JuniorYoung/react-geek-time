const REQUEST_LOGIN = 'REQUEST_LOGIN';
const RESPONSE_LOGIN = 'RESPONSE_LOGIN';
const LOGIN = 'LOGIN';

//action creators
function requestLogin() {
    return {
        type: REQUEST_LOGIN
    };
}
function responseLogin() {
    return {
        type: RESPONSE_LOGIN
    };
}
function login() {
    return (dispatch) => {
        dispatch(requestLogin());
        //模仿异步登录
        setTimeout(() => {
            dispatch(responseLogin());
        }, 2000);
    }
}

//reducer
export default function userLogin(state = {
    isLogin: false,
    isReq: false
}, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                isLogin: false,
                isReq: true
            };
            break;
        case LOGIN:
            return {
                isLogin: true,
                isReq: false
            };
        default:
            return {
                isLogin: false,
                isReq: false
            }
            break;
    }
}