export default function calculateOverhead(item , harvests){
  const { daysToReharvest , buy } = item
  const tiles = 1
  //| Eventually tiles will be calculated by user imput. For now, it's just 1.
  if(daysToReharvest) return buy * tiles
  return buy * tiles * harvests
}