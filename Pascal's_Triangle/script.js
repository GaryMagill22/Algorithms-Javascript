/* 
Challenge: Create Pascal's Triangle see: https://www.mathsisfun.com/pascals-triangle.html

Your task is to write a JavaScript function that takes an integer n as input and returns an array of arrays 
that represents the first n rows of Pascal's triangle.

Pascal's triangle is a triangular array of numbers in which the first and last number in each row is 1,
and each remaining number is the sum of the two numbers above it in the previous row.

For example, if n is 5, the function should return the following array:


[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]

]

hint: How many digits are in row n? 

*/


function generatePascalsTriangle(n) {
    let triangle = []
    if (n === 0) {
    return triangle;
}
triangle.push([1]);
for (let i = 1; i < n; i++) {
    let prevRow = triangle[i - 1];
    let newRow = [];
    // console.log('prevRow ', prevRow)
    // console.log('newRow ', newRow);
    newRow.push(1); // push 1
    for (let j = 1; j < prevRow.length; j++) {
        // console.log( "j ", j)
        newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    newRow.push(1);
    triangle.push(newRow);
}


    // Code Here!

    return triangle;
}


// function generateNextRow(lastRow) {
//     let nextRow = []
//     nextRow.push(1)
//     for (let i = 0; i < lastRow.length - 1; i++) {
//       nextRow.push(lastRow[i] + lastRow[i + 1])
//     }
//     nextRow.push(1)
//     return nextRow
//   }


console.log(generatePascalsTriangle(1));
// => [[1]]

console.log(generatePascalsTriangle(2));
// => [[1], [1, 1]]

console.log(generatePascalsTriangle(5));
// => [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

console.log(generatePascalsTriangle(6));
// => [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ]
// ]