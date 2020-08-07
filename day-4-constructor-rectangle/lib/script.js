'use strict';
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    if(1 <= a || b && a || b <= 100){
        this.length = a;
        this.width = b;
        this.perimeter = 2 * (this.length + this.width);
        this.area = this.length * this.width;
    }
}