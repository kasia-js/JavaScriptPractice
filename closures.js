// https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
//1. EXECUTION CONTEXT
let a = 3 //global execution context
function addTwo(x) { // addTwo variable in the global execution context once this is called it changes to local execution context
  let ret = x + 2 
  return ret // when the function returns the local execution context is destroyed (variales x and ret destroyed!)
}
let b = addTwo(a) //b defined in the blobal execution context
console.log(b)
