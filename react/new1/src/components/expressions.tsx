import React from "react";




function Expression()
{
    const title ='techmaghi welcomes you'
    const square = (value: number) => value * value

return(
   <>
   <h1>Techmaghi welcomes you</h1>
   <h2>{title}</h2>
   <h3>Result = {square(7)}</h3>
   </> 
)
}

export default Expression
