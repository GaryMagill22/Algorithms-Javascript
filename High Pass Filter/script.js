function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        } 
        
    } return filteredArr;
};
    var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
    console.log(result); // we expect back [6, 8, 10, 9] //



    /* Better than average --
Given an array of numbers return a count of how many of the numbers are larger than the average. */

    function betterThanAverage(arr) {
        var sum = 0;
        var count = 0;
        for (var i=0; i<arr.length; i++) {
            sum = sum + arr[i];
            
        } 
        var avg = sum / arr.length;
        
        for (var i=0; i<arr.length; i++) {
            if (arr[i] > avg) 
                count++;
            
        } 
        return count;
    };
    var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
    console.log(result); // we expect back 


    // reverse array //

    function reverse(arr) {
        revArr = [];
        var temp = 0;
        for (var i=arr.length - 1; i>=0; i--) {
            temp = arr[i];
            revArr.push(temp);
        } return revArr;
        
    };
    
    var result = reverse(["a", "b", "c", "d", "e"]);
    console.log(result); // we expect back ["e", "d", "c", "b", "a"]
    