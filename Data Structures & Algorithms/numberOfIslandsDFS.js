console.log("hi");

var numIslands = function(grid) {
    var islandCount = 0;
    //First we want to traverse every element of the grid

    for(let rowIndex in grid){
        for(colIndex in grid[rowIndex]){
            //check island exists
            if(grid[rowIndex][colIndex] === '1'){
                islandCount++;
                flood(parseInt(rowIndex), parseInt(colIndex), grid);
            }
            //do something
        }
    }


    return islandCount;
};

//Helper Function
// Make stuff into water
const flood = (rowIn, colIn, grid) => {
    console.log(rowIn, colIn, grid[rowIn]);
    //exit or return for out of bounds or water'0'
    if (grid[rowIn] === undefined||grid[rowIn][colIn]===undefined|| grid[rowIn][colIn]==='0') return;
    //turn land into water
    grid[rowIn][colIn] = '0';
    //recursion
    flood(rowIn +1, colIn, grid); //above
    flood(rowIn -1, colIn, grid); //below
    flood(rowIn, colIn +1, grid); //right
    flood(rowIn, colIn -1, grid); //left
}

grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  console.log(numIslands(grid));
  Output: 1