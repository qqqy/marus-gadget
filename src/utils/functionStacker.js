import adjustDays from "./adjustDays";
import perDiem from "./perDiem";
import weightedAverage from "./weightedAverage";
import kegged from "./kegged";

export default function functionStacker(item){
  let itemDaysAdjusted = adjustDays(item)
  let itemPerDiemAdded = perDiem(itemDaysAdjusted)
  let itemKegged = kegged(itemPerDiemAdded)
  console.log("functionStacker: itemKegged:" , itemKegged)
  return weightedAverage(itemPerDiemAdded)
}