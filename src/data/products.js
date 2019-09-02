class Product{
  constructor(){
    let qualityNames = ["base" , "silver", "gold" , "iridium"]
    this.name = arguments[0];
    this.qualities = arguments[1].map((sell , i) => ({quality: qualityNames[i] , sell}))
  }
}

class Produce extends Product{
  constructor(){
    super(...arguments)
    let { daysToReharvest , yeild , seasons , source } = arguments[4] ? arguments[4] : {}
    this.grow = arguments[2];
    this.daysToReharvest = daysToReharvest ? daysToReharvest : 0
    this.yeild = yeild ? yeild : 1
    this.seasons = seasons ? seasons : 1
    this.buy = arguments[3];
    this.source = source ? source : "farming"
  }
}

class Fruit extends Produce{
  constructor(){
    super(...arguments)
    this.kegType = "fruit"
  }
}

class Vegetable extends Produce{
  constructor(name){
    super(...arguments)
    const kegTypeExceptionFlag = ["wheat" , "coffee" , "hops"].indexOf(name)
    if(kegTypeExceptionFlag !== -1){
      this.kegType = name
    } else {
      this.kegType = "vegetable"
    }
  }
}

export default [
  new Fruit("cranberry" , [75 , 93 , 112] , 8 , 240 , {daysToReharvest: 5 , yeild: 2}),
  new Fruit(
    "starfruit",
    [750 , 937 , 1125],
    13, 
    400, 
  ) ,
  new Vegetable(
    "hops" ,
    [25 , 31 , 37] ,
    11 ,
    60 ,
    {daysToReharvest: 1}
  ) , 
  new Vegetable(
    "coffee" ,
    [15 , 18 , 22] ,
    10,
    15,
    {
      daysToReharvest: 2,
      seasons: 2,
      yeild: 4
    }
  )
]

// export default [{
//   name: "test-fruit",
//   source: "farming" ,
//   //| When building the class, make sure all objects from farming have a seasons property
//   seasons: 1 ,
//   buy: 100 ,
//   grow: 10 ,
//   daysToReharvest: 0 ,
//   yeild: 1 ,
//   kegType: "fruit",
//   qualities: [
//     {
//       quality: "base",
//       sell: 300
//     },
//     {
//       quality: "silver",
//       sell: 350
//     },
//     {
//       quality: "gold",
//       sell: 400
//     }
//   ]
// }
// ]