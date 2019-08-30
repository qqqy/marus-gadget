export default function getDays(item , instrument){
  const { source , seasons } = item;
  switch(instrument ? instrument : source){
    case "farming":
      return 28 * seasons - 1;
    case "animals":
      return 1;
    case "keg":
      return 420;
    default:
      new Error("getDays: source not recognized:" + source)
  }
}

// export default function getDays(item , instrument){
//   let {daysInSeason: days , type} = item
//   if(instrument === "keg"){ 
//     type = `${instrument}-${type}`
//   } else if (instrument && )
//   switch(type){
//     case "fruit":
//     case "wheat":
//     case "vegetable":
//     case "hops":
//     case "coffee":
//       days--
//       break;
//     case "keg-fruit":
//       days = 7;
//       break;
//     case "keg-wheat":
//       days = 2;
//       break;
//     case "keg-vegetable":
//       days = 4;
//       break;
//     case "keg-hops":
//       days = 2;
//       break;
//     case "keg-honey":
//       days = 1;
//       break;
//     case "keg-coffee":
//       days = 1;
//       break;
//     default:
//       return {...item, daysInSeason: days}
//   }
//   return {...item, daysInSeason: days}
// }