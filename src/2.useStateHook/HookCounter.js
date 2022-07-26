/* Steps to use the state hook in react:
1. import useState
2. call it passing in a default value
3. assign the return pair of values to variables using array De-structuring
4. Use them in the return function  */

import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter

/* Rules of Hooks:
1. "Only Call Hooks at the Top Level" - 
    Don't call Hooks inside loops, conditions, or nested functions
2. "Only Call Hooks from React Functions" - 
    Call them from within React functional Components and not just any regular JavaScript function */