/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

 //Return 0 if there is no sequence
 //no duplicates
 //All words have same length & lower-case alphabets only
 //no duplicates
 //beginWord and endWord will not be the same
var ladderLength = function(beginWord, endWord, wordList) {
    let table = {};
    wordList.map(word=> table[word] = true);
    

    let q = [[beginWord, 1]];//processing list
    while(q.length > 0){
        let [word, len] = q.shift(); //Opposite of pop()
        for (let i=0; i<word.length; i++){
            for(let c of "abcdefghijklmnopqrstuvwxyz"){
                let adjword = word.slice(0,i) + c + word.slice(i + 1);
                if (table.hasOwnProperty(adjword)){
                    if (adjword == endWord) return len + 1;
                    q.push([adjword, len+1]);
                    delete table[adjword];
                }
            }
        }         
       
    }
    return 0;
};

var beginWord = "hit";
var endWord = "cog";
var wordList = ["hot","dot","dog","lot","log","cog"];
