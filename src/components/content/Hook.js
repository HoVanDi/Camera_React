import React, { useState } from 'react';

function Count (){
  const [count , setcount]= useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}> nhấn vào đây</button>
    </div>
  )
}
export default Count;

