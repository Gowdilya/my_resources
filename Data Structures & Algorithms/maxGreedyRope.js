//Maximize Number of ropes merged whose length is >0
function solution(K, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var i = 0;
    var count = 0;
    var size = 0;
    
    for(i=0; i<A.length; i++) {
        size += A[i]; // merge rope
        
        if(size >= K) {
            count++;
            size = 0;// cut rope , start of new merging
        }
    }
    
    return count;
}