// cd to JavaScript Folder, in Terminal Type "node binaryGap.js" 
// n % x, gives the remainder after division 

var binaryGap = function (N) {
    // write your code in JavaScript (Node.js 4.0.0)     
    // Tests if our value is an integer
    const bin = N.toString(2);

    let currentGap = 0;
    let gaps = []; // collect list of gaps

    for (i=0; i<bin.length; i++){

      if (bin[i]==="0"){
        currentGap++;

        if (bin[i+1]==="1"){
          gaps.push(currentGap);
          currentGap = 0;
        }
      }
    }

    if (gaps.length===1){
      return gaps[0];
    } else if (gaps.length>1){
      return Math.max(...gaps) //Max Gap, or have newGap > OldGap use it
    } else {
      return 0
    }

  };
  
  console.log(binaryGap(21));
  //console.log((32).toString(2));