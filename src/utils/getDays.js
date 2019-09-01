export default function getDays(item , instrument){
  const { source , seasons } = item;
  switch(instrument ? instrument : source){
    case "farming":
      return 28 * seasons - 1;
    case "animals":
      return 1;
    default:
      new Error("getDays: source not recognized:" + source)
  }
}