'use strict';

function getSecondLargest(nums) {
    // Complete the function
    if (nums.sort((a,b) => b-a)[0] == nums.sort((a,b) => b-a)[1]) {    
        return nums.sort((a,b) => b-a)[2];
    } else {
        return nums.sort((a,b) => b-a)[1]; 
    }
}

