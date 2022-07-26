/* How do we tell react to conditionally run useEffect only when the count value changes?
In class components, we added a check to compare the previous state with the current state and only update if there is a difference.
Now, this pattern is so common that the react team decided to build this into useEffect for conditionally executing an effect.
Here, we pass in a second parameter which is an array. Within this array, we need to specify either props or state that we need to
watch for. Only if those props & States specified in this array were to change, the effect would be executed.  */

import React, { useState, useEffect } from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterFive