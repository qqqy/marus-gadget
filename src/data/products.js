export default [{
  name: "test-fruit",
  source: "farming" ,
  //| When building the class, make sure all objects from farming have a seasons property
  seasons: 1 ,
  buy: 100 ,
  grow: 10 ,
  daysToReharvest: 0 ,
  yeild: 1 ,
  qualities: [
    {
      quality: "base",
      sell: 300
    },
    {
      quality: "silver",
      sell: 350
    },
    {
      quality: "gold",
      sell: 400
    }
  ]
}
]