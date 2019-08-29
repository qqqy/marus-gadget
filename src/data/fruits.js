export default {
  testCrop: {
    daysInSeason: 2,
    tiles: 1,
    buy: 0,
    yeild: 1,
    // sell: 75,
    grow: 0,
    // NOTE: regrow should NOT include the seed days
    regrow: 1,
    type: "fruit",
    prices: [
      {
        quality: "base",
        sell: 2100,
        chance: 75,
      } ,
      {
        quality: "silver",
        sell: 400,
        chance: 25,
      }
    ]
  } ,
  cranberry: {
    daysInSeason: 28,
    tiles: 1,
    buy: 240,
    yeild: 2,
    sell: 75,
    grow: 7,
    regrow: 5,
    type: "fruit",
    prices: [
      {
        quality: "base",
        sell: 75,
        chance: 97,
      } ,
      {
        quality: "silver",
        sell: 93,
        chance: 2,
      } ,
      {
        quality: "gold",
        sell: 112,
        chance: 1,
      } ,
    ]
  } ,
  blueberry: {
    daysInSeason: 28,
    tiles: 1,
    buy: 80,
    perHarvestYeild: 3,
    sell: 50,
    grow: 13,
    regrow: 4
  } , 
  blueberryWine: {
    daysInSeason: 8,
    tiles: 1,
    buy: 50,
    perHarvestYeild: 1,
    sell: 150,
    grow: 0,
    regrow: 7
  } ,
  blueberryJelly: {
    daysInSeason: 4,
    tiles: 1,
    buy: 50,
    perHarvestYeild: 1,
    sell: 150,
    grow: 0,
    regrow: 3
  }
}