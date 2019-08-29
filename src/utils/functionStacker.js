import adjustDays from "./adjustDays";
import perDiem from "./perDiem";
import weightedAverage from "./weightedAverage";
import kegged from "./kegged";

export default function functionStacker(item){
  let itemDaysAdjusted = adjustDays(item)
  let itemPerDiemAdded = perDiem(itemDaysAdjusted)
  let itemKegged = kegged(itemPerDiemAdded)
  let itemJarred = kegged(itemKegged, "jar")
  console.log("functionStacker: itemKegged:" , itemJarred)
  return weightedAverage(itemPerDiemAdded)
}