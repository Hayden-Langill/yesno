let number = 0

document.getElementById('button').addEventListener('click', maybe)

function maybe () {
  number = document.getElementById('input').value
  number = parseInt(number)
  if (number >= 0) {
    document.getElementById('guess').innerHTML = 'Your number is a postive!'
  } else {
    document.getElementById('guess').innerHTML = 'Your number is a negative!'
  }
}
