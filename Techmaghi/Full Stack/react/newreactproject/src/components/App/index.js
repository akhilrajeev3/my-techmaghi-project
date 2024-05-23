
import './App.css';


import Intro from '../Intro';
import { Component } from 'react';
import { useState } from 'react';




/* function Appp() {
  const [series, setSeries] = useState([])
  return (
    <div className="App">
      
      <header className="App-header">
      <h1 className='App-title'>Tv Series List</h1>
      </header>
      <Intro message="Here you can find all of your series"/>
    </div>
  );
} */


/* function App()
{
  const [data,setData]= useState("appu")
  function updateData()
  {
     setData("motta")
  }
  return (
    
    <div className='App'>
      <h1>
        {data}
      </h1>
      <button onClick={updateData}>Update</button>
    </div>
  )
}
 */

function Counter()
{
  const[count, setCount]=useState(0)

  const Increment= ()=>{
    setCount(count + 1)
  }

  return(
    <div>
      <p> Count :{count} </p>
        <button onClick={Increment}>Click Here</button>
      
    </div>

  )
}
export default Counter;
