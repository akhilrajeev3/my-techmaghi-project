import React from "react";

function Expression()
{
    const square =(value:number) => value * value

    return(
        <h1>Result = {square(9)}</h1>
    )
}

export default Expression