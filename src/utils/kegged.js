import adjustDays from "./getDays";
import perDiem from "./perDiem";
import artisanSellPricer from "./artisanSellPricer";

export default function kegged(item , instrument = "keg"){
  const { type } = item;
  let objectToPass = {
    ...item ,
    grow: 0,
  };
  objectToPass.prices = item.prices.filter(price => price.quality === "base")
  //| The following line does not account for profit loss on silver and gold items. This will need to be fixed.
  objectToPass.buy = objectToPass.prices[0].sell
  const { buy } = objectToPass
  objectToPass.prices[0].sell = artisanSellPricer(instrument , type , buy)
  console.log("kegged: objectToPass:" , objectToPass)
  let toPassDaysAdjusted = adjustDays(objectToPass , instrument)
  toPassDaysAdjusted.regrow = toPassDaysAdjusted.daysInSeason
  let perDiemAdded = perDiem(toPassDaysAdjusted)
  console.log("kegged: perDiemAdded:" , perDiemAdded)
  return {...item, [instrument]: perDiemAdded.prices[0].perDiem}
}

//   daysInSeason,
//   tiles,
//   buy,
//   yeild,
//   prices,
//   grow,
//   regrow