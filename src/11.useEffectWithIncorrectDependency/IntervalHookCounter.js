import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        console.log('tick method, count value:' + count)
        setCount(count + 1)
    }

    // const tick = () => {
    //     console.log('tick method, count value:' + count)
    //     setCount(prevCount => prevCount + 1)
    // }

    // useEffect(() => {
    //     console.log('useEffect should Run only once')
    //     const interval = setInterval(tick, 1000)
    // }, [])

    useEffect(() => {
        console.log('useEffect should run when count changes')
        const interval = setInterval(tick, 1000)
    },[count])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter