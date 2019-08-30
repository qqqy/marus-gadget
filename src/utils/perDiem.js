export default function perDiem(quality , days){
  return {quality , days}
  }
  // const {daysInSeason,
  // tiles,
  // buy,
  // yeild,
  // prices,
  // grow,
  // regrow} = item;
  
  //   const seasonOverhead = buy * tiles
  //   const persistent = !!grow
  //   const harvests = Math.trunc((daysInSeason - grow) / regrow + persistent)
  //   const grossYeild = yeild * harvests
  //   const seasonGrossProfit = grossYeild * price.sell
  //   const cropPerDiem = (seasonGrossProfit - seasonOverhead)/daysInSeason
    
  //   const perDiemAdded = prices.map(price => {
  //     return {...price, perDiem: cropPerDiem}
  //   })
  
    // return {seasonOverhead, persistent, harvests, grossYeild, seasonGrossProfit, cropPerDiem}
  
  

// export default function perDiem(item){
// const {daysInSeason,
// tiles,
// buy,
// yeild,
// prices,
// grow,
// regrow} = item;

//   const seasonOverhead = buy * tiles
//   const persistent = !!grow
//   const harvests = Math.trunc((daysInSeason - grow) / regrow + persistent)
//   const grossYeild = yeild * harvests
  
//   const perDiemAdded = prices.map(price => {
//     const seasonGrossProfit = grossYeild * price.sell
//     const cropPerDiem = (seasonGrossProfit - seasonOverhead)/daysInSeason
//     return {...price, perDiem: cropPerDiem}
//   })

//   // return {seasonOverhead, persistent, harvests, grossYeild, seasonGrossProfit, cropPerDiem}
//   return {...item, prices: perDiemAdded}
// }

