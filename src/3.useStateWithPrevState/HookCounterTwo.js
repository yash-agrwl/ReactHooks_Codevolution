/* Anytime we need to update a state value based on the previous state value,
 always go with the safer option of passing in a function that will set the new state value */

import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            //setCount(count + 1)
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>

            {/* this method of incrementing count is unsafe */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            {/* Safer option */}
            {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Decrement</button> */}

            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo