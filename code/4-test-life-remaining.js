// ####################################
// #### ----- Life Remaining ----- ####
// ####################################

function lifeRemaining() {
    alert('The average life expectancy is 83.5 years.')
    let originalAge = prompt('How old are you?')
    let timeLeft = 83.5 - originalAge
    alert("You've got " + timeLeft + " years left in you.")
}