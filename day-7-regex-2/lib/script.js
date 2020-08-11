function regexVar(str) {
        let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;
        return re;

        
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // [a-z] => matches any lowercase characters
    // + => for 1 or more occurrences (this ensures str length > 3)
    // \1 => matches to previously stored match. 
        // \2 looks for matched item stored 2 instances ago 
        // \3 looks for matched item stored 3 ago, etc
    
    //  $ ensures that matched item is at end of the sequence
    // The .* means that there may be characters after 
    // that first captured character
    // \1$ checks that the last character matches the first captured character
    }