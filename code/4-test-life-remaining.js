// ####################################
// #### ----- Life Remaining ----- ####
// ####################################

function lifeRemaining() {
  alert("The average life expectancy is 83.5 years.")
  let originalAge = prompt("How old are you?")
  const averageAge = 83.5
  let timeLeft = averageAge - originalAge
  //calculates how many years the user has left
  alert("You've got " + timeLeft + " years left in you.")
}
