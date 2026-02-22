/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  let small=3,medium=4,large=5;
  let latte=1,cappuccino=1.5,mocha=2;
  let whippedCreams=0.5,extraShots=.75;
  if(size=="small"){
      if(type=="regular"){
        if(extras.whippedCream){
          return small+whippedCreams;
        }
        else if(extras.extraShot){
          return small+extraShots;
        }
        else{
          return small;
        }
      }
      else if(type=="latte"){
        if(extras.whippedCream){
          return small+whippedCreams+latte;
        }
        else if(extras.extraShot){
          return small+extraShots+latte;
        }
        else{
          return small+latte;
        }
      }
      else if(type=="cappuccino"){
        if(extras.whippedCream){
          return small+whippedCreams+cappuccino;
        }
        else if(extras.extraShot){
          return small+extraShots+cappuccino;
        }
        else{
          return small+cappuccino;
        }
      }
      else if(type=="mocha"){
        if(extras.whippedCream){
          return small+whippedCreams+mocha;
        }
        else if(extras.extraShot){
          return small+extraShots+mocha;
        }
        else{
          return small+mocha;  
        }
      }
      else{
        return -1;
      }
  }
  else if(size=="medium"){
    if(type=="regular"){
        if(extras.whippedCream){
          return medium+whippedCreams;
        }
        else if(extras.extraShot){
          return medium+extraShots
        }
        else{
          return medium;
        }
      }
      else if(type=="latte"){
        if(extras.whippedCream){
          return medium+latte+whippedCreams;
        }
        else if(extras.extraShot){
          return medium+latte+extraShots
        }
        else{
          return medium +latte;
        }
      }
      else if(type=="cappuccino"){
        if(extras.whippedCream){
          return medium+whippedCreams+cappuccino;
        }
        else if(extras.extraShot){
          return medium+cappuccino+extraShots;
        }
        else{
          return medium+cappuccino;
        }
      }
      else if(type=="mocha"){
        if(extras.whippedCream){
          return mocha+medium+whippedCreams;
        }
        else if(extras.extraShot){
          return mocha+medium+extraShots;
        }
        else{
          return mocha+medium;
        }
      }
      else{
        return -1;
      }
  }
  else if(size=="large"){
     if(type=="regular"){
        if(extras.whippedCream){
          return large+whippedCreams;
        }
        else if(extras.extraShot){
          return large+extraShots;
        }
        else{
          return large;
        }
      }
      else if(type=="latte"){
        if(extras.whippedCream){
          return large+whippedCreams+latte;
        }
        else if(extras.extraShot){
          return large+extraShots+latte;
        }
        else{
          return large+latte;
        }
      }
      else if(type=="cappuccino"){
        if(extras.whippedCream){
          return large+whippedCreams+cappuccino;
        }
        else if(extras.extraShot){
          return large+extraShots+cappuccino;
        }
        else{
          return large+cappuccino;
        }
      }
      else if(type=="mocha"){
        if(extras.whippedCream){
          return large+whippedCreams+mocha;
        }
        else if(extras.extraShot){
          return large+extraShots+mocha;
        }
        else{
          return large+mocha;  
        }
      }
      else{
        return -1;
      }
}
else{
  return -1;
}    
}
