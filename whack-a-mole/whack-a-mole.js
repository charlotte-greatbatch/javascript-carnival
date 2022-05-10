// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Whack-a-Mole!')
// get the cells written in a variable
let theCells = document.getElementsByTagName('TD')

//make a function so it will randomize what td element you get when you refresh
// make 2 variables with randomIndex, randomCell
function randomMole(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
// function randomIndex() {
//   return randomMole(0, 25)
// }

//this function lets you see the mole pic on the index.html page
//all done through JS. Call the function afterwards with where you want it to be

function molePic() {
  let randomIndex = randomMole(0, 25)
  console.log(randomIndex)
  let randomCell = theCells[randomIndex]
  console.log(randomCell)
  const img = document.createElement('img')
  img.src = 'mole.PNG'
  // gives ID to the image tag
  img.id = 'mole'
  img.style.width = '70px'
  img.style.height = '70px'
  //Set image to random cell
  randomCell.appendChild(img)
  document.getElementById('mole').onclick = function () {
    whackedMole()
    let audio = new Audio()
    audio.src = 'whack-audio.wav'
    audio.play()
  }
}

molePic()
//need to add a on-click method for the mole that calls a function
//whackedMole function should remove mole from curretn cell and
//using the function that lets you re-use code from earlier to get mole in new cell

function whackedMole() {
  let noMole = document.getElementById('mole')
  noMole.remove()
  molePic()
}

// whackedMole(randomCell)
