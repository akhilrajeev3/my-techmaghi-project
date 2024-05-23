import React from "react";
import { useState } from "react";

function Counter()
{
    const [count, setCount] = useState(0)
    function Increment()
    {
        setCount(count+1)
    }

    function Reset()
    {
        setCount(0)
    }

    function decrement()
    {
        if(count >= 1)
        setCount(count -1)
    }
    return (
        <div>
        <h2>{count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={decrement}>decrement</button>

            
        <button onClick={Reset}>Reset</button>
    
    </div>

    )
}

export default Counter
