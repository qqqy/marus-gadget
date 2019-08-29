export default function weightedAverage({prices}){
  return prices.reduce((average , price)=>{
    const {perDiem , chance} = price
    return average +(perDiem * chance)/100
  } , 0)
}