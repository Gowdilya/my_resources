// rotate Array K times

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function smallestNum(A) {

  var table = {};
  smallestPositive = 1;

  for ( let i =  0; i < A.length; i++){
    table[A[i]] = true;
  }

  //default return 1
  if(!A.includes(1)){
    return 1
  }


  while(table[smallestPositive]){
    smallestPositive++;
  }
  return smallestPositive;
}



smallestNum([1,0,5]);