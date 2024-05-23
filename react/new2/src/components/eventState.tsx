import exp from "constants";
import { useState } from "react";
import React from "react";

function EventState()
{
    const[sessionActive, setSession] = useState(false)

    const handleClick = () =>
    {
        setSession(!sessionActive)
    }


    return(
        <div>

        <div>
            {sessionActive ? (
                <h2>Welcome</h2>) : (<h2>Please login</h2>)
            } 
        </div>

       <div>
        <h2>click here</h2>
        <button onClick={handleClick} style={{backgroundColor: sessionActive ? "#ff8a8a" : "#aef359"}}>
            {sessionActive ? "logout" : "login"}
        </button>
       </div> 

       </div>
    )
}

export default EventState