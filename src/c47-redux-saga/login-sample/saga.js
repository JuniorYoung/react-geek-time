import {
    call,
    put,
    takeEvery
} from 'redux-saga';

const UserService = {
    login(uname) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (uname === 'Junior') {
                    resolve({id: 100, name: 'Junior', age: 20});
                } else {
                    reject('用户名或密码错误');
                }
            }, 2000);
        });
    }
}

function* login(action) {
    try {
        yield put({type: 'requestLogin'});
        const res = yield call(UserService.login, action.uname);
        yield put({type: 'loginSuccess', res});
    } catch (error) {
        yield put({type: 'loginFailure', error});
    }
}

function* mySaga() {
    yield takeEvery('login', login);
}

export default mySaga;