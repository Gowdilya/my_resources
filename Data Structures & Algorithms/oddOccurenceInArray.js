//Given Array Return a mapping of Unique elements to whether
// they are occur"odd" or "even" number of times in the array

function oddNum(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  function getKeyByValue(object, value) {
    console.log(object);
    return Object.keys(object).find(key => object[key] === value);
  }

  var table ={}
    
  for(var i=0; i<A.length; i++) {
      if(table[A[i]] === undefined || table[A[i]] === "even"){
        table[A[i]] = "odd"
      }
      else if(table[A[i]] === "odd"){
        table[A[i]] = "even"
      }
  }


  
  return getKeyByValue(table, "odd");
}



console.log(oddNum([1,3,3,1,4]));