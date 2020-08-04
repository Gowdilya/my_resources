var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length == 0){
        return []
    }
    var hash = {};
    strs.forEach( str => {
        let letters = str.split('').sort()
        hash[letters]? hash[letters].push(str):hash[letters]=[str]
    })
    const keys = Object.keys(hash);
    const values = keys.map(function(v){return hash[v];});
return values;
};

console.log(groupAnagrams(strs))