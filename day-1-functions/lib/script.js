'use strict';
/*
 * Create the function factorial here
 */

function factorial(n){
    let product = 1;
    while(n>0){
        product *= n;
        n--;
    }
    return product;
}

console.log(factorial(4));