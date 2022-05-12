// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Dress The Clown!')
// up and down to go through body parts
// left and right to cycle through pictures/clothing options
//changed head index -1 otherwise it would start at the wrong picture
let headIndex = -1
let clothingIndex = 0
//make a function that can change the head image of the clown
function changeClothes() {
  if (clothingIndex == 0) {
    //this takes a variable so you can access the head ID
    let headChange = document.getElementById('head')
    //make a variable headSrc to hold where the images can change (headIndex not set to images/head1.png mistake)
    let headSrc = './images/head' + headIndex + '.png'
    //this changes the head change source to turn it to ^ so we cycle through the index numbers with the arrow function we make below
    headChange.src = headSrc
  } //repeated for each clothing index for body and shoes
  if (clothingIndex == 1) {
    let bodyChange = document.getElementById('body')
    let bodySrc = './images/body' + headIndex + '.png'
    bodyChange.src = bodySrc
  }
  if (clothingIndex == 2) {
    let shoeChange = document.getElementById('shoes')
    let shoeSrc = './images/shoes' + headIndex + '.png'
    shoeChange.src = shoeSrc
  }
}
// this makes the browser recognise when the arrow keys are pressed
//keycode is being phased out, so better to use addEventListener
document.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'ArrowRight':
      //if statements are easier to map out the Index to make sure it doesn't go above or below the set index number
      if (headIndex < 5) {
        headIndex++
      } else {
        headIndex = 0
      }
      changeClothes()
      break
    case 'ArrowLeft':
      // have to think somewhat backwards for the left arrow as it is decreasing not increasing
      //this is where a good && statement comes in, since your pictures are 0-5 think of the headIndex as literal numbers
      if (headIndex < 6 && headIndex > 0) {
        headIndex--
        console.log(headIndex)
      } else {
        headIndex = 5
        console.log(headIndex)
      }
      changeClothes()
      break
    //same goes for the up and down arrows as well, same formula as the left and right there are just less numbers to work with
    //for this one, else statement brings clothing back to the very last number which is 2
    case 'ArrowUp':
      if (clothingIndex < 2) {
        clothingIndex++
      } else {
        clothingIndex = 0
      }
      break
    case 'ArrowDown':
      if (clothingIndex < 3 && clothingIndex > 0) {
        clothingIndex--
      } else {
        clothingIndex = 2
      }
  }
})
