export default function adjustDays(item){
  let {daysInSeason: days , type} = item
  switch(type){
    case "fruit":
    case "wheat":
    case "vegetable":
    case "hops":
    case "coffee":
      days--
      break;
    case "keg-fruit":
      days = 7;
      break;
    case "keg-wheat":
      days = 2;
      break;
    case "keg-vegetable":
      days = 4;
      break;
    case "keg-hops":
      days = 2;
      break;
    case "keg-honey":
      days = 1;
      break;
    case "keg-coffee":
      days = 1;
      break;
    default:
      return {...item, daysInSeason: days}
  }
  return {...item, daysInSeason: days}
}