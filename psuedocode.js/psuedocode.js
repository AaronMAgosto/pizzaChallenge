//write a function that takes a number of adults, a number of chldren, 
// the number of beds in a vacation home and returns true of there are enough
//beds for everyone and flase if not. Assume adults will sleep 2 to a bed


function enoughBeds(numAdults, numKids, numBeds){
// divide the number of adults by 2
const adultBeds = numAdults / 2
//add that to number of kids
const totalBedsNeeded = adultBeds + numKids
// is that resukt <= number of beds
return (totalBedsNeeded <= numBeds)
// the line above is the same as the 5 below
// if(totalBedsNeeded <= numBeds) {
//     return true 
// } else 
//     return false
// }
}
const canWeFit =  enoughBeds(8, 4, 5)
console.log("can we fit?", canWeFit) 