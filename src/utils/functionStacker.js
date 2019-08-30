import products from "../data/products";
import getDays from "./getDays";
import calculateOverhead from "./calculateOverhead";
import calculateHarvests from "./calculateHarvests";

//| The function stacker can receive an array containing all items you'd like prices for.
export default function functionStacker(targetItems = products) {
  const productPerDiems = []
  //| functionStacker runs perDiem on every item in the array, once for each quality.
  for (let i = 0, length = targetItems.length; i < length; i++) {
    const { name , qualities , yeild } = targetItems[i]

    const days = getDays(targetItems[i])
    const harvests = calculateHarvests(targetItems[i] , days)
    const seasonOverhead = calculateOverhead(targetItems[i] , harvests)

    for (let j = 0, length = qualities.length; j < length; j++) {
      const { sell } = qualities[j]
      const grossSeasonProfit = yeild * harvests * sell
      productPerDiems.push({name , quality: qualities[j].quality , perDiem: (grossSeasonProfit - seasonOverhead)/days})
    }
  }
  return productPerDiems
}