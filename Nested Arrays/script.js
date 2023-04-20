var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
];

// Use https://pythontutor.com/javascript.html#mode=edit if you would like to visualize the nested for loops!


function isPresent2d(arr2d, value) {
    for (var i=0; i<arr2d.length; i++) {
        for (var j=0; j<arr[i].length; j++){
            if (arr[i][j] == value){
                return true;
            }
        }
    }
    return false;
}

// complete the following function
function flatten(arr2d) {
    var flat = [];
    for (var i=0; i<arr2d.length; i++){
        for (var j=0; j<arr2d[i].length; i++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]