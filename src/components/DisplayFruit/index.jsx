import React from 'react'
import fruits from "../../data/fruits"
import functionStacker from '../../utils/functionStacker';

export default function DisplayFruit(){
  return(
    <h1>{Math.round(functionStacker(fruits.testCrop) * 100)/100}</h1>
  )
}