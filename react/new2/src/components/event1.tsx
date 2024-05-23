import React from "react";

function Events() {
   function handleChange()
   {
    alert('event triggered')
   }

   function handleClick()
   {
    alert('button clicked')
   }

   function handleBlur(e: React.FocusEvent<HTMLInputElement>)
   {
    alert("triggered")
   }

   return (
    <>

    <div>
    <button onClick={handleClick}>click here</button>
    
    </div>
    
    <div>
    
        <input type="checkbox" onChange={handleChange} />
    </div>

    <div>
        <input type="text"  onBlur={(e) => handleBlur(e)}/>
    </div>

    </>

   )
}

export default Events
