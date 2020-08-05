var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var count  = new Array(26); //Can't loop empty slots
    if (strs.length == 0){
        return []
    }
    var hash = {};
    strs.forEach( str => {
        count.fill(0);
        for (var i = 0; i < str.length; i++) {
             var char = str.charAt(i);
             //97 is ASCI for a
             count[ char.charCodeAt(0)-97]++;
          }
        hash[count]? hash[count].push(str):hash[count]=[str]
    })
    const keys = Object.keys(hash);
    const values = keys.map(function(v){return hash[v];});
return values;
};

console.log(groupAnagrams(strs))