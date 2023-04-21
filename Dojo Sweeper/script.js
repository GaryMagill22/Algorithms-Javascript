// console.log("successful...loading")

// var theDojo = [
// [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
// [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
// [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
// [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
// [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
// [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
// [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
// [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
// [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
// [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
// var dojoDiv = document.querySelector("#the-dojo");

// // Creates the rows of buttons for this game
// function render(theDojo) {
//     var result = "";
//     for (var i = 0; i < 10; i++) { //row//
//         for (var j = 0; j < theDojo[i].length; j++) { // collumn //
//             result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
//         }
//     }
//     return result;
// }

// // TODO - Make this function tell us how many ninjas are hiding 
// //        under the adjacent (all sides and corners) squares.
// //        Use i and j as the indexes to check theDojo.
// function howMany(i, j, element) {
//     var sum = theDojo[i][j];
//     var rowStart = i - 1;
//     var colStart = j - 1;
//     for (let k = rowStart; k < i + 2; k++) {
//         for (let h = colStart; h < j + 2; h++) {
//             sum += theDojo[k][h];
//             console.log(theDojo[k][h], sum);
//         }
//         sum -= theDojo[i][j];
//     }
    
//     console.log({ i, j });
//     alert(sum);
// };

// // BONUS CHALLENGES
// // 1. draw the number onto the button instead of alerting it
// // 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// // 3. if you click on a ninja you must restart the game 
// //    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// // start the game
// // message to greet a user of the game
// var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
// console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
// console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// // shows the dojo for debugging purposes
// console.table(theDojo);
// // adds the rows of buttons into <div id="the-dojo"></div> 
// dojoDiv.innerHTML = render(theDojo);

// // 

var theDojo = [
    [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
    [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
    [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
    [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
    [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
    [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
    [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
    [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
    [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
    [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
];

var gameStatus = document.getElementById('gamestatus')

var theDojo3 = spawnNinjas()
// var theDojo = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    let total = 0;
    // i is which array we're in
    // j is array position
    if (theDojo3[i][j] == 1) {
        gameStatus.innerHTML = `<h2>Game Over!</h2> \n <button onclick="restartGame()">Restart</button>`
        dojoDiv.innerHTML = render([])
    }

    for (let row = i - 1; row <= i + 1 && row < theDojo3.length; row++) {
        if (row >= 0) { // make sure row does not leave the grid
            for (var col = j - 1; col <= j + 1 && col < theDojo3[0].length; col++) {
                if (!(row === i && col === j) && col >= 0) { // Ignore the selected square and make sure column does not leave the grid
                    total += theDojo3[row][col]
                }
            }
        }
    }
    element.innerText = total;
};

function restartGame() {
    gameStatus.innerHTML = ''
    theDojo3 = spawnNinjas()
    dojoDiv.innerHTML = render(theDojo3)
};

function spawnNinjas() {
    let count = 1
    let grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    while (count <= 10) {
        x = Math.floor(Math.random() * 10)
        y = Math.floor(Math.random() * 10)
        if (grid[x][y] == 1) {
            continue
        } else {
            grid[x][y] = 1
            count++
        }
    }
    return grid
};
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
console.table(theDojo3);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo3);