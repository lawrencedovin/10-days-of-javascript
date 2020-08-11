function regexVar(str) {
        let re = /\d+/g;
        return re;

        
    //  ^ => first item matches:
    // () => stores matching value captured within
    // \d => matches any digit 0-9
    // + => for 1 or more occurrences (this ensures str length > 3)
    // /g => is used for global search anywhere placed in the string.
    }