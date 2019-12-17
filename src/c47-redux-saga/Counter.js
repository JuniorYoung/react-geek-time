import React from 'react'

export default ({ value, onIncrement, onDecrement, onIncrementAsync}) => (
    <div>
        <button onClick={onIncrementAsync}>
            Increment after 1s
        </button>
        {' '}
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>
)