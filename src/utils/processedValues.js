export default function processedValues(item, instrument) {
  const { kegType, qualities: [{sell}] } = item;

  function value(minutes, sell, product) {
    return {
      minutes,
      sell,
      product
    }
  }


  switch (instrument) {
    case "keg":
      switch (kegType) {
        case "fruit":
          return value(10000, sell * 3, "wine")
        case "vegetable":
          return value(6000, sell * 2.25, "juice")
        case "wheat":
          return value(1750, 200, "beer")
        case "hops":
          return value(2250, 300, "pale ale")
        case "honey":
          return value(600, 200, "mead")
        case "coffee":
          return value(120, 150, "coffee")
        default:
          new Error("processedValues: kegType not recognized:" + kegType)
      }
    break;
    case "jar":
      return value(4000 , 2 * sell + 50 , kegType === "fruit" ? "jelly" : "pickles")
    default:
      new Error("processedValues: instrument not recognized:" + instrument)
  }
}