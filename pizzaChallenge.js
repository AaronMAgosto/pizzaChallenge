function pizzaParty(numAdults, numSlices, slicesInPizza){
const numPizzaNeeded = Math.ceil (numAdults * numSlices / slicesInPizza)
return (numPizzaNeeded)
}

const weAreFull = pizzaParty(20, 3, 8)
console.log("we will need " + weAreFull)