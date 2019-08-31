import React from 'react'
import functionStacker from '../../../utils/functionStacker';

export default function ListFruit(){
  const perDiems = functionStacker().map(perDiem => {
    return (
      <div>
        <h1>Product: {perDiem.name}</h1>
        <h1>Quality: {perDiem.quality}</h1>
        <h1>PerDiem: {Math.round(perDiem.perDiem * 100)/100}</h1>
        <hr/>
      </div>
    )
  })
  return(
    perDiems
  )
}