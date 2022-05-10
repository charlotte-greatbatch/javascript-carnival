// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Inflate The Unicorn!')
//give the img's their own id's to make life easier later
//get an array containing the unicorns

let images = document.getElementsByClassName('inflate-an-image')
// console.log(images)

//bind the onclick method to our unicorn using a for loop
for (let i = 0; i < images.length; i++) {
  images[i].onclick = imageClicked
}

//write a function that gets called every time you click on a unicorn
function imageClicked(e) {
  //giving us an oppertunity to manipulate or change an element when its clicked on or event aka e
  let image = e.target
  //this checks the files to see if they match, and when they do to be updated to the next picture
  if (image.src.match('./images/unicorn-0.png')) {
    image.src = './images/unicorn-1.png'
  } else if (image.src.match('./images/unicorn-1.png')) {
    image.src = './images/unicorn-2.png'
  } else if (image.src.match('./images/unicorn-2.png')) {
    image.src = './images/unicorn-3.png'
  } else {
    //nesting an if statement in this if statement to say thank you, lining up the id's from the HTML
    //so one takes space of the first unicorn, second takes space of the second unicorn, and three takes space of the third unicorn
    if (image.id == 'one') {
      alert('Unicorn number one says thank you!')
    } else if (image.id == 'two') {
      alert('Unicorn number two says thank you!')
    } else if (image.id == 'three') {
      alert('Unicorn number three says thank you!')
    }
  }
}

//riki's try
//if ((image = 'one')) {
//  alert('Unicorn number ' + images[0] + 'says thank you!')
//} else if ((image = 'two')) {
//  alert('Unicorn number ' + images[1] + 'says thank you!')
//} else if ((image = 'three')) {
//  alert('Unicorn number ' + images[2] + 'says thank you!')
//}
//}
