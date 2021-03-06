class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return (this.w * this.h);
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(side) {
        // Square only needs 1 parameter for input
        super(side, side);
        // super from rectangle takes in 2 parameters to work
    }
}

// class Shape {
//     constructor(color) {
//         this._color = color;
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);

//         this.radius = radius;
//     }

//     // As from above
// }


if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}