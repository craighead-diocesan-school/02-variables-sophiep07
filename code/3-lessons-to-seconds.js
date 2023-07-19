// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert("There are 60 minutes in a lesson, and 60 seconds in a minute.")
  let lessonLeft = prompt("How many lessons do you have left today?")
  const lessonTime = 3600
  let timeLeft = lessonLeft * lessonTime
  //this calculates how many seconds the user has left in school
  alert("You have " + timeLeft + " seconds left in school today.")
}
