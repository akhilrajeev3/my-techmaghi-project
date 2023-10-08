
function keyDown(event)
{
    if(event.key === 'Enter'){
        calculateTotal()
    }
}


function calculateTotal()
{
   const inputElement = document.querySelector('.input').value;
   let cost = Number(inputElement);
   //Number is a built in function to manually change a string into number.
   console.log(cost)
    
   if(cost<40)
   {
    cost = cost + 10;
   }else if(cost>40)
   {
    cost = cost;
   }
   
   document.querySelector('.totalCost').innerHTML = `${cost}`
}
