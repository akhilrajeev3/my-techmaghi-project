import React from "react";

function Conditionals()
{

    const sessionActive = true

    return (
    <>
    <h1>conditionals</h1>
    {sessionActive ? (
        <h2>welcome</h2>
    ) : (
        <h2>Please login</h2>
    )}
    </>
    )
    
}

export default Conditionals