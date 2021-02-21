//Givern a matrix go clockwise from the first element and return a spiral Order of the matrix
var matriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


var spiralOrder = function (matrix) {
  var result = [];
  if (matrix === null || matrix.length === 0) {
    return result;
  }
  var top = 0;
  var bottom = matrix.length - 1;
  var left = 0;
  var right = matrix[0].length - 1;
  var matrixSize = matrix.length * matrix[0].length;

  while (result.length < matrixSize) {
    // top
    for (let i = left; i <= right && result.length < matrixSize; i++) {
      result.push(matrix[top][i]);
    }
    top = top + 1;

    //right
    for (let i = top; i <= bottom && result.length < matrixSize; i++) {
      result.push(matrix[i][right]);
    }
    right = right - 1;

    //bottom
    for (let i = right; i >= left && result.length < matrixSize; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom = bottom - 1;

    //left
    for (let i = bottom; i >= top && result.length < matrixSize; i--) {
      result.push(matrix[i][left]);
    }
    left = left + 1;
  }
  return result;
};

console.log(spiralOrder(matriks));
