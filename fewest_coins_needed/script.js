/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    var change = {
        penny: 1,
        nickel: 5,
        dime: 10,
        quarter: 25,
        halfDollar: 50
    }
    if (cents == 5) {
        change = { penny: 5 }
    } if (cents == 6) {
        change = {
            nickel: 1,
            penny: 1
        }
        return change;
    } if (cents == 10) {
        change = {
            dime: 1
        }
    } return change;

}

/*****************************************************************************/

console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))


function fewestCoinChange(cents) {
    let change = {}
    while (cents >= 25) {
        cents -= 25
        if (change.hasOwnProperty('quarter')) {
            change['quarter'] += 1
        } else {
            change['quarter'] = 1
        }
    }
    while (cents >= 10) {
        cents -= 10
        if (change.hasOwnProperty('dime')) {
            change['dime'] += 1
        } else {
            change['dime'] = 1
        }
    }
    while (cents >= 5) {
        cents -= 5
        if (change.hasOwnProperty('nickel')) {
            change['nickel'] += 1
        } else {
            change['nickel'] = 1
        }
    }
    while (cents > 0) {
        cents -= 1
        if (change.hasOwnProperty('penny')) {
            change['penny'] += 1
        } else {
            change['penny'] = 1
        }
    }
    console.log(change)
    return change
}


function fewestCoinChange(cents) {
    var coins = []
    if (Math.floor(cents / 50) > 0) {
        coins.push({ half_dollar: Math.floor(cents / 50) });
        cents = cents % 50;
    }
    if (Math.floor(cents / 25) > 0) {
        coins.push({ quarter: Math.floor(cents / 25) });
        cents = cents % 25;
    }
    if (Math.floor(cents / 10) > 0) {
        coins.push({ dime: Math.floor(cents / 10) });
        cents = cents % 10;
    }
    if (Math.floor(cents / 5) > 0) {
        coins.push({ nickel: Math.floor(cents / 5) });
        cents = cents % 5;
    }
    if (cents > 0) {
        coins.push({ penny: cents });
    }
    return coins;
}