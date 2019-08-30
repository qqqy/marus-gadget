export default function calculateHarvests(crop , days){
  let { grow , daysToReharvest } = crop
  let harvests = 1;
  if(!daysToReharvest) daysToReharvest = grow
  if(grow >= days) return 0
  days -= grow
  harvests += Math.trunc(days / daysToReharvest)
  return harvests
}