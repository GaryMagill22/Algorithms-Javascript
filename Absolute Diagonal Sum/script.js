/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference  between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

// const squareMatrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9],
// ];
// const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

// const squareMatrix2 = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
// function diagonalDifference(sqrMatrix) {
//     var sum = theDojo[i][j];
//     var rowStart = i - 1;
//     var colStart = j - 1;
//     for (var i=0; i<arr.length; i++) {
//         for (var j=0; j<arr.length; i++) {

//         }
//     }

// }
// Math.abs()
// Reminder for getting an absolute value, we could use the Math library in JS after we get the difference of the sums!)
// Note: Since we are only getting one particular value in each row, we may be able to avoid nested for loops. 




// * only works if perfect square** //

var squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];

function diagonalDifference(sqrMatrix) {
    var sum1 = 0;
    var sum2 = 0;
    

    for (var i=0; i<sqrMatrix.length; i++) {
        var row = sqrMatrix[i]
        console.log(row[i])
        console.log(row[row.length - 1 - i])
        sum1+=row[i]
        sum2+=row[row.length - 1 - i]
    }
    console.log(sum1 + " " + sum2)
    return Math.abs(sum1 - sum2)
}

console.log(diagonalDifference(squareMatrix))