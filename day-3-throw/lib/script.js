'use strict';

function getLetter(s) {
    let letter;
    // Write your code here
    switch(1 <= s.length && s.length <= 100) {
        case s.charAt(0) === 'a':
            letter = 'A';
            break;
        case s.charAt(0) === 'b':
            letter = 'B';
            break;
        case s.charAt(0) === 'h':
            letter = 'C';
            break;
        case typeof(s) === "string":
            letter = 'D';
            break;
        default:
            return 'Not a string input';
            break;
    }
    
    return letter;
}

