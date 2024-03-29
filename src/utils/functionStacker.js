import products from "../data/products";
import getDays from "./getDays";
import calculateOverhead from "./calculateOverhead";
import calculateHarvests from "./calculateHarvests";
import processedValues from "./processedValues";
import caskValues from "./caskValues";

console.log("functionStacker: products:" , products)

//| The function stacker can receive an array containing all items you'd like prices for.
export default function functionStacker(targetItems = products) {
  const productPerDiems = []
  //| functionStacker runs perDiem on every item in the array, once for each quality.
  for (let i = 0, length = targetItems.length; i < length; i++) {
    const { name , qualities , yeild , kegType } = targetItems[i]

    const days = getDays(targetItems[i])
    const harvests = calculateHarvests(targetItems[i] , days)
    const seasonOverhead = calculateOverhead(targetItems[i] , harvests)

    for (let j = 0, length = qualities.length; j < length; j++) {
      const { sell } = qualities[j]
      const grossSeasonProfit = yeild * harvests * sell
      productPerDiems.push({name , quality: qualities[j].quality , perDiem: (grossSeasonProfit - seasonOverhead)/days})
    }
    //| If keggable, functionStacker adds a keg, jar, and cask perDiem per quality
    if(kegType && kegType !== "coffee"){
      const { minutes: kegMinutes , sell: kegSell , product: kegProduct } = processedValues(targetItems[i] , "keg")
      const { minutes: jarMinutes , sell: jarSell , product: jarProduct } = processedValues(targetItems[i] , "jar")
      //> Days for now to keep things consistent, but probably switch to minutes to simplify when accounting for schedule
      const kegDays = Math.ceil(kegMinutes / 60 / 24)
      const jarDays = Math.ceil(jarMinutes / 60 / 24)
      for (let k = 0, length = qualities.length; k < length; k++){
        const { sell: buy , quality } = qualities[k];
        productPerDiems.push({name: `${name} ${kegProduct} from ${quality} fruit` , quality: "base" , perDiem: (kegSell - buy)/kegDays })
        productPerDiems.push({name: `${name} ${jarProduct} from ${quality} fruit` , quality: "base" , perDiem: (jarSell - buy)/jarDays })
      }
      const caskArray = caskValues(kegProduct , {cost: kegSell});
      console.log("Caskarray: " , caskArray)
      caskArray && caskArray.forEach((value , i) => {
        const { days , sell , quality , buy } = value;
        productPerDiems.push({name: `${name} ${kegProduct} (from cask)` , quality, perDiem: (sell - buy)/days})
      })
    }
    if(kegType === "coffee"){
      const { minutes , sell , product } = processedValues(targetItems[i] , "keg")
      const days = Math.ceil(minutes / 60 / 24);
      for (let l = 0 , length = qualities.length; l < length; l++){
        const {sell: buy , quality} = qualities[l];
        productPerDiems.push({name: `${product} from ${quality} beans` , quality: "base" , perDiem: (sell - (buy * 5))/days})
      }
    }
  }
  return productPerDiems
}