import React from "react";
 function Football()
 {
    const shoot = () =>
    {
        alert('Great Shot')
    }

    return (
        <button onClick={shoot}>shoot</button>
    )
 }

 export default Football