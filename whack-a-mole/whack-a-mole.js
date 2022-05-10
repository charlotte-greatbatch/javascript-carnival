// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Whack-a-Mole!')

let theCells = document.getElementsByTagName('TD')
//for (let i = 0; i < theCells.length; i++) {
//  theCells[i].onclick = cellClicked
//}
function randomMole(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
let randomIndex = randomMole(0, 25)
let randomCell = theCells[randomIndex]

function molePic() {
  const img = document.createElement('img')
  img.src = 'mole.PNG'
  randomCell.appendChild(img)
}
molePic(randomCell)
