/* 
    Given two arrays, interleave them into one new array.

    The arrays may be different lengths. The extra items should be added to the
    back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    var newArray = []

    function interleaveArrays(arr1, arr2) {
        debugger;
        let newArr = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length || j < arr2.length) {
            if (i < arr1.length) {
                newArr.push(arr1[i]);
                i++;
            }
            if (j < arr2.length) {
                newArr.push(arr2[j]);
                j++;
            }
        }
        debugger;
        return newArr;

    }
} console.log(interleaveArrays(arrA1, arrA2))

//  ANOTHER SOLUTION
function interleaveArrays(arr1, arr2) {
    let output = []
    let length = Math.max(arr1.length, arr2.length)
    // arr1.length > arr2.length?
    // length = arr1.length:
    // length = arr2.length
    for (let i = 0; i < length; i++) {
        if (i < arr1.length) {
            output.push(arr1[i])
        }
        if (i < arr2.length) {
            output.push(arr2[i])
        }
    }
    return output
}