// export default function perDiem(fruit){
//   const {grow , regrow , yeild , seedBuy , trellis , prices} = fruit
//   const dailies = []
//   //| Determine Harvests
  // const persistent = !!grow
  // const harvests = Math.trunc((28 - grow) / regrow + persistent)
//   //| Determine Gross Yeild
//   const grossYeild = harvests * yeild
//   //| Determine tile usage
//   const tiles = 
//   //| Determine Overhead
//   const overhead = 
//   //| Return Values
//   return {
    
//   }
// }

export default function perDiem(){
  const daysInSeason = 28,
  tiles = 1,
  buyPrice = 100,
  perCropYeild = 1,
  sellPrice = 120,
  grow = 9,
  regrow = 4;

  const seasonOverhead = buyPrice * tiles
  const persistent = !!grow
  const harvests = Math.trunc((daysInSeason - grow - 1) / regrow + persistent)
  const grossYeild = perCropYeild * harvests
  const seasonGrossProfit = grossYeild * sellPrice
  const cropPerDiem = (seasonGrossProfit - seasonOverhead)/daysInSeason
  return cropPerDiem
}

