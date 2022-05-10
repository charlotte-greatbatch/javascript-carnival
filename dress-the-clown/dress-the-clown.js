// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Dress The Clown!')

let headIndex = 0
function changeClownHead() {
  headChange = document.getElementById('head')
  headChange.src = './images/head1.png'
  let headSrc = './images/head' + headIndex + '.png'
}
changeClownHead()
