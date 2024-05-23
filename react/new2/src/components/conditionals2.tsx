import React from "react";
import { useState } from "react";

export default function ConditionalsIf()
{
    const[rating, setRating] = useState(4)
    function displayRating()
    {
        if (rating === 1)
        {
            return(
                <>
                <div>
                    <span style={{color: "#ED2C2D", fontSize: 25}}> Average</span>
                </div>
                <input type="text" />
                </>
            )
        }
        else if(rating ===2)
        {
            return(
            <>
            <div>
                <span style={{color: "#FE6E00", fontSize: 25}}> Fair</span>
            </div>
            <input type="text" />
            </>
        )
        }
        else if(rating ===3)
        {
            return(
                <>
                <div>
                    <span style={{color: "#F4GU00", fontSize: 25}}> High</span>
                </div>
                <input type="text" />
                </>
            )
        }
        else if(rating ===4)
        {
            return(
                <>
                <div>
                    <span style={{color: "#F4GU00", fontSize: 25}}> Excellent</span>
                </div>
                <input type="text" />
                </>
            )
        }
    }


return(
    <>
    <h1>Conditionals IF</h1>
    <div>
        <select onChange ={(e)=> {
            setRating(parseInt(e.currentTarget.value, 10))
        }}
        >
            <option value = {1}>1</option>
            <option value = {2}>2</option>
            <option value = {3}>3</option>
            <option value = {4}>4</option>
            
        </select>
    </div>
    <span>===================================</span>
        <div>your rating is {rating} </div>
        <div>{displayRating()}</div>
    </>
)


}
