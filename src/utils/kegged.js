import adjustDays from "./adjustDays";
import perDiem from "./perDiem";

export default function kegged(item){
  const { type } = item;
  let objectToPass = {
    ...item , 
    type: "keg-" + type,
    grow: 0,
  };
  objectToPass.prices = item.prices.filter(price => price.quality === "base")
  //| The following line does not account for profit loss on silver and gold items. This will need to be fixed.
  objectToPass.buy = objectToPass.prices[0].sell
  objectToPass.prices[0].sell = objectToPass.buy * 3
  console.log("kegged: objectToPass:" , objectToPass)
  let toPassDaysAdjusted = adjustDays(objectToPass)
  toPassDaysAdjusted.regrow = toPassDaysAdjusted.daysInSeason
  let perDiemAdded = perDiem(toPassDaysAdjusted)
  console.log("kegged: perDiemAdded:" , perDiemAdded)
  return {...item, kegged: perDiemAdded.prices[0].perDiem}
}

//   daysInSeason,
//   tiles,
//   buy,
//   yeild,
//   prices,
//   grow,
//   regrow