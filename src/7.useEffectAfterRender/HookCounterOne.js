import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne

/* How it works:
 When we specify useEffect, we are basically requesting react to execute the function that is passed as an argument 
every time the component renders.

Points to note:
1. useEffect runs after every render.
2. useEffect is placed inside the component by doing this we can easily access the components state and 
    props without having to write any additional code 

Steps on how to use the effect hook to cause side effect in a functional component:
1. Import useEffect from react.
2. Call it within the component and pass in a function which has to be executed after every render of that component. */