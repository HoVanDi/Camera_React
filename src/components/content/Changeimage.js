import React, {userState} from 'react'

function Color() {
  const [color, setcolor]= userState("red")
  return(
    <>
    <h1>my favorite color is {color}</h1>
    <button type ="button" onClick={() =>setcolor("blue")}> Bulue</button>
    <button type ="button" onClick={() =>setcolor("pink")}> pink</button>
    <button type ="button" onClick={() =>setcolor("green")}> green</button>
    </>
  )
}

export default Color;
