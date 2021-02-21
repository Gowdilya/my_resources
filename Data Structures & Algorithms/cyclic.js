// rotate Array K times

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function rotate(A, K) {
  // write your code in JavaScript (Node.js 4.0.0)
  var rotatedArray = [];
  if(A.length === 1 || K === 0) {
      return A;
  }
  // index change for K == 3 0--> 2 1--> 3 2-->4 3-->0 4--> 1

  for(var i=0; i<A.length; i++) {
    max = A.length -1;
    if(K + i > max){
      rotatedArray[K + i - max -1] = A[i];
    }
    else{
      rotatedArray[K + i] = A[i];
    }
    console.log(rotatedArray);
  }
  return rotatedArray;
}



console.log(rotate([1,3,3,1,4], 1));