function regexVar(str) {
        let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;
        return re;

        
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // [a-z] => matches any lowercase characters
    // + => for 1 or more occurrences (this ensures str length > 3)
    // | => OR
    // \. means period
    }