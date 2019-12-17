import { put, takeEvery, all, call, delay } from 'redux-saga/effects'

export function* helloWorld() {
    yield console.log('hello world')
}
/**
 * Saga 通过 delay(1000) 延迟了 1 秒钟，然后 dispatch 一个叫 INCREMENT 的 action。
 */
export function* incrementAsync() {
    yield call(delay, 1000)
    // yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
    yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloWorld(),
        watchIncrementAsync()
    ])
}