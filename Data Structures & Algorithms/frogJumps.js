
// D is distance of one Jump
// how many jumps from X to Y
function jump(X, Y, D) {
  // write your code in JavaScript (Node.js 4.0.0)
  if(Y === X) {
      return 0;
  } 
  //can make it one jump
  else if(D >= (Y-X)) {
      return 1;
  } else {
      var jumps = (Y-X)/D;
      console.log(jumps)
      return Math.ceil(jumps);
  }
}



console.log(jump(10,85,30));