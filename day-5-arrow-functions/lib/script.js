/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    // let newArray = [];
    // for(let num of nums){
    //     num % 2 == 0 ? newArray.push(num * 2) : newArray.push(num * 3);
    // }
    // return newArray;
    return nums.map(num => num%2==0 ? num*2: num*3);   
                  //input  //output for element in new array
}