export default function caskValues(caskType , options){
  const { cost , cheeseQuality , holistic } = options
  if(caskType === "wine" && !cost) new Error("caskValues: invalid wineCost: " , cost)

  let buy = cost

  function createArray(daysArray , buy){
    let qualities = ["silver" , "gold" , "iridium"]
    let modifiers = [1 , 1.25 , 1.5 , 2]
    return daysArray.map((days , i) => value(days, modifiers[i+1] * buy, qualities[i], modifiers[i] * buy))
  }
  function value(days , sell , quality , buy){
    return {
      days,
      sell, 
      quality,
      buy
    }
  }
  //> This only calculates for compartmentalized comparisons. A holistic comparison would need to be adjusted, possibly with a reducer.
  switch(caskType){
    case "wine":
      return createArray([14,14,28] , buy)
    case "pale ale":
      return createArray([9,8,17] , 300)
    case "beer":
    case "mead":
      buy = 200
      return createArray([7,7,14] , buy)
    case "cheese":
      let cheeseArray = [3 , 4 , 7]
      return createArray(cheeseArray , buy)
    case "goat cheese":
      return createArray(cheeseArray , 375)
    default:
      new Error("caskValues: caskType not recognized:" , caskType)
  }
}