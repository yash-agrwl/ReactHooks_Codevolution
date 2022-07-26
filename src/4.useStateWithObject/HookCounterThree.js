/*Method 1:
Here we can see that by default, we have both firstName & lastName set to empty strings.
Now, when i start typing in the firstName, the lastName property is removed from the state variable.
Same way, if i start typing in the lastName, the firstName property disappears from the state variable.
The reason this happens is because useState doesnot automatically merge and update the object.

This is a key difference to setState which we come across in class components - 
    setstate will merge the state whereas the useState Hook setter function will not merge the state, we have to do it manually.

It's not difficult though because we can use the spread operator to handle the manual merge as shown in Method 2.*/

import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ firstName: "", lastName: "" })

    return (
        <div>
            <form>
                <h1>Method 1</h1>
                <input type="text" onChange={e => setName({ firstName: e.target.value })} />
                <input type="text" onChange={e => setName({ lastName: e.target.value })} />

                <h2>Method 2</h2>
                <input type="text" onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" onChange={e => setName({ ...name, lastName: e.target.value })} />

                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree