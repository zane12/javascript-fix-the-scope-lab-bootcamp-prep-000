var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  return n + 2

  // Feel free to move things around!
  
}

function funkyFunction() {
 
<<<<<<< HEAD
    return function(){
      return "FUNKY!"
    }
=======
    return "FUNKY!"
>>>>>>> 9d27b9802d600b21bd9b883826a84b65f5d985d8
  
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()()
=======
function theFunk() {
  var theFunk = funkyFunction()
  theFunk()
}
>>>>>>> 9d27b9802d600b21bd9b883826a84b65f5d985d8
