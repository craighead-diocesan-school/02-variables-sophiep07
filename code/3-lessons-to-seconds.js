// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')
  let lessonLeft = prompt('How many lessons do you have left today?')
  let timeLeft = lessonLeft * 3600
  alert('You have ' + timeLeft + ' seconds left in school today.')
}
