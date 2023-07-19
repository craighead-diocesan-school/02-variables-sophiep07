// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert("The price with GST the price and 15%.")
  let originalCost = prompt("What is the cost before GST?")
  const gstAmount = 1.15
  let gstCost = originalCost * gstAmount
  //this calculates the cost of the item including gst
  alert("The total price is $" + gstCost)
}
