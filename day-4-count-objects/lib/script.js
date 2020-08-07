/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    for(let object of objects){
        if(1 <= object.x||object.y && object.x||object.y >= 100) {
            if(object.x == object.y){
                count++;
            } 
        }
    }
    return count;
}