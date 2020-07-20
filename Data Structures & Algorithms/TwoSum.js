/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



var twoSum = function(nums, target) {
    var hashTable = {};
    for (var i = 0; i < nums.length; i++){
        var complement = target - nums[i];
        // Now Check if the targetMinusNum exists in the hash
        if (hashTable[complement] !== undefined){
            // found pair
            return [(hashTable[complement]), i ];
        }
        // add to hashtable, and keep looking
        hashTable[nums[i]] = i;
    }    
   
    throw new Error("No two sum solution");
};

console.log(twoSum([1,2,3,4], 5));