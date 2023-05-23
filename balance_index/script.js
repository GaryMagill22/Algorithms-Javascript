/*
    Return the balance index where sums are equal on either side
    (exclude its own value).

    Return -1 if none exist.
*/

const nums3 = [2, 2, 2, -2, 2, 0, 6];
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
// function balanceIndex(nums) {
//     var sumLeft = 0;
//     var sumRight = 0;
//     for (var i = 0; i < nums.length / 2; i++) {
//         sumLeft += sumLeft;
//         if (nums.length % 2 === 0) {
//             return -1;
//         }
//         for (var j = nums.length / 2; j < nums.length; j--) {
//             sumRight += sumRight;
//             if (sumLeft === sumRight) {
//                 return nums[i];
//             }

//         }
//     }


// }

function balanceIndex(nums) {
    var totalSum = 0;
    if (nums.length < 3) {
        return -1
    }
    for (var i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    var leftSum = 0;

    for (var i = 0; i < nums.length; i++) {
        var rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1; // Return -1 if no balance index is found
}

console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
/*****************************************************************************/
