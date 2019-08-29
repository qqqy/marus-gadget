//| At some point we'll want to index simple sell values, instead of having them hard-coded here.

export default function artisanSellPricer(instrument , itemType, buy = 0){
  switch(instrument){
    case "keg":
      switch(itemType){
        case "fruit":
          return buy * 3;
        case "vegetable":
          return buy * 2.25;
        case "wheat":
        case "honey":
          return 200;
        case "hops":
          return 300;
        case "coffee":
          return 150;
        default:
          console.log("artisanSellPricer: in keg: itemType not recognized:" , itemType)
          return 0;
      }
    case "jar":
      return buy * 2 + 50;
    default:
      console.log("artisanSellPricer: InstrumentNotRecognized:" , instrument)
      return 0;
  }
  
}