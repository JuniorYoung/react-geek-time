import React, { useState } from 'react';

export default () => {
    let [count, setCount] = useState(1);
    return (
        <div>
            <h1>Hello World , SSR {count}</h1>
            <button onClick={() => setCount(count + 1)}>累加</button>
        </div>
    );
}