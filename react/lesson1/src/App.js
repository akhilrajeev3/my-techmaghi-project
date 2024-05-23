
import './App.css';
import React from 'react';
import FragmentDemo from './components/fragmentsdemo';

import Expression from './components/Expression';
// function Counter() 
// {

//     const [count, setCount]=useState(0)

//     const increment = () =>
//     {
//       setCount((prevCount) => prevCount + 1)
//     }
    
//     const decrement =() =>
//     {
//       setCount(prevCount => prevCount-1)
//     }

//     const reset =() =>
//     {
//       setCount(prevCount => 0)
//     }
//   return (
//     <div >
//       <h1>{count}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>decrement</button>
//     <button onClick={reset}>t</button>
//     </div>
//   );

// }


const Greet = (props) =>
{
 return <p1>Hello {props.name}, your age is {props.age}</p1>
  
}




function app()

{
  return(
    <div>

     {/* <FragmentDemo/> */}
     {/* <Table /> */}
     <Expression/>
    
    </div>
  )
  
}






export default app;
