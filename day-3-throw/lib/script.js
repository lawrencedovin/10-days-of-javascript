'use strict';

function isPositive(a) {
    try {
        if (a >= 1) return "YES";
        if (a === 0) throw "Zero Error";
        if (a < 0) throw "Negative Error";
    } 
    catch(error){
        return error;
    }
}
